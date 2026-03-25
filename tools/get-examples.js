#!/usr/bin/env node
/**
 * get-examples.js
 *
 * Looks up a CSS selector in the pre-built page index, fetches matching pages,
 * and returns HTML fragments for the explore agent to analyse.
 *
 * Usage:
 *   node tools/get-examples.js \
 *     --selector ".news-teaser" \
 *     [--samples 8] \
 *     [--page 1] \
 *     [--context] \
 *     [--plain] \
 *     [--output /tmp/examples.json]
 *
 *   node tools/get-examples.js --get-sample <id>
 *     Fetches and prints the HTML for a previously seen sample ID.
 *     IDs are in the format {selectorIndex}_{pageIndex}[_ctx].
 *
 * Output JSON:
 *   {
 *     "selector": ".news-teaser",
 *     "totalPages": 142,
 *     "page": 1,
 *     "results": [
 *       { "id": "42_17", "url": "https://...", "matchCount": 3, "html": "<article>...</article>" }
 *     ]
 *   }
 *
 * --context mode: html is the lowest common ancestor of all selector matches on
 *   the page, rather than the first individual match. Useful for seeing how
 *   multiple instances of a component relate to one another.
 *
 * Exits 0 always. Returns totalPages:0 / results:[] if selector is not in index.
 */

import { createGunzip } from 'zlib';
import { createReadStream, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- Parse args ---
let selector = null;
let samples = 8;
let page = 1;
let contextMode = false;
let outputPath = null;
let plainMode = false;
let getSampleId = null;

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if      (args[i] === '--selector'   && args[i+1]) selector    = args[++i];
  else if (args[i] === '--samples'    && args[i+1]) samples     = parseInt(args[++i], 10);
  else if (args[i] === '--page'       && args[i+1]) page        = parseInt(args[++i], 10);
  else if (args[i] === '--context')                 contextMode = true;
  else if (args[i] === '--output'     && args[i+1]) outputPath  = args[++i];
  else if (args[i] === '--plain')                   plainMode   = true;
  else if (args[i] === '--get-sample' && args[i+1]) getSampleId = args[++i];
}

if (!selector && !getSampleId) {
  process.stderr.write('Usage: get-examples --selector "<selector>" [--samples 8] [--page 1] [--context] [--plain] [--output path]\n');
  process.stderr.write('       get-examples --get-sample <id>\n');
  process.exit(1);
}

// --- Load index ---
const indexPath = resolve(__dirname, 'index.json.gz');
const chunks = [];
await new Promise((resolve, reject) => {
  const gunzip = createGunzip();
  gunzip.on('data', chunk => chunks.push(chunk));
  gunzip.on('end', resolve);
  gunzip.on('error', reject);
  createReadStream(indexPath).on('error', reject).pipe(gunzip);
});
const index = JSON.parse(Buffer.concat(chunks).toString('utf8'));

// --- Fetch and extract helpers ---
async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function extractNormal($, sel) {
  const matches = $(sel);
  if (matches.length === 0) return null;
  return { matchCount: matches.length, html: $.html(matches[0]) };
}

function extractContext($, sel) {
  const matches = $(sel);
  if (matches.length === 0) return null;
  if (matches.length === 1) return { matchCount: 1, html: $.html(matches[0]) };

  // Walk up from first match to find lowest ancestor containing all matches
  let ancestor = matches[0].parent;
  while (ancestor && ancestor.type !== 'root') {
    if ($(ancestor).find(sel).length === matches.length) {
      return { matchCount: matches.length, html: $.html(ancestor) };
    }
    ancestor = ancestor.parent;
  }
  // Fallback: return first match if no ancestor found (shouldn't happen)
  return { matchCount: matches.length, html: $.html(matches[0]) };
}

// --- Handle --get-sample mode ---
if (getSampleId) {
  const parts = getSampleId.split('_');
  const isCtx = parts[parts.length - 1] === 'ctx';
  const [selectorIdx, pageIdx] = parts.map(Number);
  const sel = Object.keys(index.selectors)[selectorIdx];
  const url = index.pageIndex[pageIdx];
  if (!sel || !url) {
    process.stderr.write(`Invalid sample id: ${getSampleId}\n`);
    process.exit(1);
  }
  const pageHtml = await fetchPage(url);
  if (!pageHtml) {
    process.stderr.write(`Failed to fetch: ${url}\n`);
    process.exit(1);
  }
  const $ = cheerio.load(pageHtml);
  const extracted = isCtx ? extractContext($, sel) : extractNormal($, sel);
  if (!extracted) {
    process.stderr.write(`Selector '${sel}' not found on page\n`);
    process.exit(1);
  }
  process.stdout.write(extracted.html + '\n');
  process.exit(0);
}

// --- Resolve matching page URLs ---
const entry = index.selectors[selector];

if (!entry) {
  emit({ selector, totalPages: 0, page, results: [] });
  process.exit(0);
}

// Compute stable selector index for sample IDs
const selectorIndex = Object.keys(index.selectors).indexOf(selector);

const allPages = entry.mode === 'list'
  ? entry.pages.map(i => ({ url: index.pageIndex[i], pageIndex: i }))
  : index.pageIndex.map((url, i) => ({ url, pageIndex: i }))
      .filter(({ pageIndex: i }) => !new Set(entry.pages).has(i));

// --- Stable ordering via djb2 hash ---
function djb2(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
    hash = hash >>> 0; // keep unsigned 32-bit
  }
  return hash;
}

allPages.sort((a, b) => djb2(a.url) - djb2(b.url));

// --- Paginate: strict non-overlapping window ---
const windowStart = (page - 1) * samples;
const candidates = allPages.slice(windowStart, windowStart + samples);

// --- Structural skeleton for deduplication (strips text + data-* only) ---
function skeleton(html) {
  const $ = cheerio.load(html);
  $('*').each((_, el) => {
    $(el).contents().filter((_, n) => n.type === 'text').remove();
    for (const key of Object.keys(el.attribs || {})) {
      if (key.startsWith('data-')) delete el.attribs[key];
    }
  });
  return $.html();
}

// Normalise text content for comparison — collapse whitespace, trim
function extractText(html) {
  return cheerio.load(html).root().text().replace(/\s+/g, ' ').trim();
}

const results = [];
const skeletonMap = new Map(); // skeleton → index into results

for (const pageObj of candidates) {
  const html = await fetchPage(pageObj.url);
  if (!html) continue;

  const $ = cheerio.load(html);
  const extracted = contextMode ? extractContext($, selector) : extractNormal($, selector);
  if (!extracted) continue;

  const skel = skeleton(extracted.html);
  if (skeletonMap.has(skel)) {
    const entry = results[skeletonMap.get(skel)];
    entry.duplicates++;
    if (!entry.textVaries && extractText(extracted.html) !== entry._text) {
      entry.textVaries = true;
    }
  } else {
    const id = `${selectorIndex}_${pageObj.pageIndex}${contextMode ? '_ctx' : ''}`;
    skeletonMap.set(skel, results.length);
    results.push({ id, url: pageObj.url, ...extracted, duplicates: 0, textVaries: false, _text: extractText(extracted.html) });
  }
}

// Remove internal field before output
for (const r of results) delete r._text;

// --- Output ---
function emit(data) {
  if (plainMode) {
    const { selector, totalPages, page: p, results } = data;
    process.stdout.write(`selector: ${selector} | totalPages: ${totalPages} | page: ${p} | results: ${results.length}\n`);
    for (let i = 0; i < results.length; i++) {
      const r = results[i];
      process.stdout.write(`\n--- ${i + 1}/${results.length} [${r.id}] ${r.url} (matchCount:${r.matchCount} duplicates:${r.duplicates} textVaries:${r.textVaries}) ---\n`);
      process.stdout.write(r.html + '\n');
    }
    return;
  }
  const json = JSON.stringify(data, null, 2);
  if (outputPath) {
    writeFileSync(outputPath, json, 'utf8');
  } else {
    process.stdout.write(json + '\n');
  }
}

emit({ selector, totalPages: allPages.length, page, results });
