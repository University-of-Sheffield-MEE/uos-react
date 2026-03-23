#!/usr/bin/env node
/**
 * extract-component.js
 *
 * Fetches pages from a live website and extracts the DOM subtree(s) matching
 * a given CSS selector. Returns a JSON array of fragments.
 *
 * Usage:
 *   node tools/extract-component.js \
 *     --selector ".news-teaser" \
 *     --urls "/news/page1,/news/page2" \
 *     --base-url "https://www.example.ac.uk" \
 *     --max-samples 8 \
 *     --dedupe \
 *     --output /tmp/fragments.json
 *
 * Exit code 0: at least one fragment found.
 * Exit code 1: zero fragments found.
 */

import { program } from 'commander';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { readFileSync, writeFileSync } from 'fs';

program
  .requiredOption('--selector <selector>', 'CSS selector to extract')
  .requiredOption('--base-url <url>', 'Base URL of the site (e.g. https://www.example.ac.uk)')
  .option('--urls <urls>', 'Comma-separated list of site-relative URL paths')
  .option('--urls-file <path>', 'Path to a newline-separated file of URL paths')
  .option('--max-samples <n>', 'Maximum number of unique fragments to collect', '8')
  .option('--dedupe', 'Deduplicate fragments by structural skeleton', false)
  .option('--output <path>', 'Output file path (defaults to stdout)')
  .parse(process.argv);

const opts = program.opts();

// --- Collect and deduplicate URLs ---
let urlPaths = [];

if (opts.urls) {
  urlPaths = opts.urls.split(',').map(u => u.trim()).filter(Boolean);
}
if (opts.urlsFile) {
  const lines = readFileSync(opts.urlsFile, 'utf8').split('\n');
  urlPaths = urlPaths.concat(lines.map(l => l.trim()).filter(Boolean));
}

// Remove duplicates and shuffle for diversity
urlPaths = [...new Set(urlPaths)];
urlPaths = urlPaths.sort(() => Math.random() - 0.5);

const maxSamples = parseInt(opts.maxSamples, 10);
// Fetch up to 3x the desired samples to account for pages with no match
const fetchLimit = maxSamples * 3;
const urlsToFetch = urlPaths.slice(0, fetchLimit);

if (urlsToFetch.length === 0) {
  process.stderr.write('No URLs provided.\n');
  process.exit(1);
}

/**
 * Compute a structural skeleton of an HTML fragment by stripping all text
 * content and data-* attributes, leaving only element tags and class names.
 * Used for deduplication.
 */
function structuralSkeleton(html) {
  const $ = cheerio.load(html);
  $('*').each((_, el) => {
    // Remove text nodes
    $(el).contents().filter((_, node) => node.type === 'text').remove();
    // Remove data-* attributes
    const attribs = el.attribs || {};
    for (const key of Object.keys(attribs)) {
      if (key.startsWith('data-') || key === 'id' || key === 'style') {
        delete attribs[key];
      }
    }
  });
  return $.html();
}

async function fetchPage(url) {
  const fullUrl = opts.baseUrl.replace(/\/$/, '') + url;
  try {
    const res = await fetch(fullUrl, {
      headers: { 'User-Agent': 'UoS-React-ComponentExtractor/1.0' },
      timeout: 10000,
    });
    if (!res.ok) {
      process.stderr.write(`Skipping ${url}: HTTP ${res.status}\n`);
      return null;
    }
    return await res.text();
  } catch (err) {
    process.stderr.write(`Skipping ${url}: ${err.message}\n`);
    return null;
  }
}

async function main() {
  const fragments = [];
  const seenSkeletons = new Set();

  for (const urlPath of urlsToFetch) {
    if (fragments.length >= maxSamples) break;

    const html = await fetchPage(urlPath);
    if (!html) continue;

    const $ = cheerio.load(html);
    const matches = $(opts.selector);

    if (matches.length === 0) continue;

    matches.each((idx, el) => {
      if (fragments.length >= maxSamples) return false;

      const outerHtml = $.html(el);

      if (opts.dedupe) {
        const skeleton = structuralSkeleton(outerHtml);
        if (seenSkeletons.has(skeleton)) return; // duplicate structure, skip
        seenSkeletons.add(skeleton);
      }

      fragments.push({
        url: urlPath,
        fragmentIndex: idx,
        html: outerHtml,
      });
    });
  }

  if (fragments.length === 0) {
    process.stderr.write(`No elements found matching "${opts.selector}" in ${urlsToFetch.length} pages.\n`);
    process.exit(1);
  }

  const output = JSON.stringify(fragments, null, 2);

  if (opts.output) {
    writeFileSync(opts.output, output, 'utf8');
    process.stderr.write(`Wrote ${fragments.length} fragment(s) to ${opts.output}\n`);
  } else {
    process.stdout.write(output);
  }

  process.exit(0);
}

main().catch(err => {
  process.stderr.write(`Fatal error: ${err.message}\n`);
  process.exit(1);
});
