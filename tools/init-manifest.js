#!/usr/bin/env node
/**
 * init-manifest.js
 *
 * One-time setup script. Reads a list of CSS selectors and calls the
 * site's page-index CLI for each one to get page counts. Writes
 * selector-manifest.json — the state file for the build pipeline.
 *
 * Usage:
 *   node tools/init-manifest.js \
 *     --index-cli "query-index" \
 *     --selector-list selectors.txt \
 *     --output selector-manifest.json \
 *     --min-pages 3
 *
 * Expected index CLI interface:
 *   <index-cli> --selector ".news-teaser"
 *   → stdout JSON: { "pageCount": 142, "pages": ["/news/...", ...] }
 *
 * The manifest stores only pageCount and status (no URL arrays).
 * The explore agent queries the index CLI at runtime for URLs.
 */

import { program } from 'commander';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

program
  .requiredOption('--index-cli <cmd>', 'The page-index CLI command (e.g. "query-index")')
  .requiredOption('--selector-list <path>', 'Path to a text file with one CSS selector per line')
  .option('--output <path>', 'Output path for selector-manifest.json', 'selector-manifest.json')
  .option('--min-pages <n>', 'Mark selectors with fewer pages as "low-priority"', '3')
  .parse(process.argv);

const opts = program.opts();
const minPages = parseInt(opts.minPages, 10);

// Read selector list
if (!existsSync(opts.selectorList)) {
  console.error(`Selector list not found: ${opts.selectorList}`);
  process.exit(1);
}

const lines = readFileSync(opts.selectorList, 'utf8').split('\n');
const selectors = lines
  .map(l => l.trim())
  .filter(l => l.length > 0 && !l.startsWith('#')); // skip empty lines and comments

if (selectors.length === 0) {
  console.error('No selectors found in selector list.');
  process.exit(1);
}

console.log(`Processing ${selectors.length} selectors...`);

const manifest = {
  selectors: {},
  components: {},
};

let countPending = 0;
let countSkipped = 0;
let countLowPriority = 0;
let countErrors = 0;

for (let i = 0; i < selectors.length; i++) {
  const selector = selectors[i];
  process.stdout.write(`\r[${i + 1}/${selectors.length}] ${selector.padEnd(60)}`);

  // Auto-skip pseudo-elements and media queries
  if (selector.includes('::') || selector.includes('@')) {
    manifest.selectors[selector] = {
      pageCount: 0,
      status: 'skipped',
      skipReason: 'pseudo-element',
    };
    countSkipped++;
    continue;
  }

  // Query the index CLI
  let pageCount = 0;
  try {
    const cmd = `${opts.indexCli} --selector ${JSON.stringify(selector)}`;
    const raw = execSync(cmd, { encoding: 'utf8', timeout: 15000 });
    const result = JSON.parse(raw);
    pageCount = result.pageCount ?? 0;
  } catch (err) {
    process.stderr.write(`\nError querying index for "${selector}": ${err.message}\n`);
    manifest.selectors[selector] = {
      pageCount: 0,
      status: 'skipped',
      skipReason: 'index-query-error',
    };
    countErrors++;
    continue;
  }

  // Dead CSS
  if (pageCount === 0) {
    manifest.selectors[selector] = {
      pageCount: 0,
      status: 'skipped',
      skipReason: 'dead-css',
    };
    countSkipped++;
    continue;
  }

  // Low priority
  if (pageCount < minPages) {
    manifest.selectors[selector] = {
      pageCount,
      status: 'low-priority',
    };
    countLowPriority++;
    continue;
  }

  // Pending
  manifest.selectors[selector] = {
    pageCount,
    status: 'pending',
  };
  countPending++;
}

process.stdout.write('\n');

// Write manifest
writeFileSync(opts.output, JSON.stringify(manifest, null, 2), 'utf8');

console.log(`\nManifest written to ${opts.output}`);
console.log(`  Pending:      ${countPending}`);
console.log(`  Low-priority: ${countLowPriority}`);
console.log(`  Skipped:      ${countSkipped}`);
console.log(`  Errors:       ${countErrors}`);
console.log(`  Total:        ${selectors.length}`);
