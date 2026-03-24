#!/usr/bin/env node
/**
 * init-manifest.js
 *
 * One-time setup script. Reads all selectors from the pre-built page index
 * and writes selector-manifest.json — the state file for the build pipeline.
 *
 * Usage:
 *   node tools/init-manifest.js \
 *     --output selector-manifest.json \
 *     --min-pages 3
 */

import { program } from 'commander';
import { writeFileSync, existsSync, createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

program
  .option('--index <path>', 'Path to index.json.gz', resolve(__dirname, 'index.json.gz'))
  .option('--output <path>', 'Output path for selector-manifest.json', 'selector-manifest.json')
  .option('--min-pages <n>', 'Mark selectors with fewer pages as "low-priority"', '3')
  .parse(process.argv);

const opts = program.opts();
const minPages = parseInt(opts.minPages, 10);

// Load the index
if (!existsSync(opts.index)) {
  console.error(`Index file not found: ${opts.index}`);
  process.exit(1);
}

process.stdout.write('Loading index… ');
const chunks = [];
await new Promise((resolve, reject) => {
  const gunzip = createGunzip();
  gunzip.on('data', chunk => chunks.push(chunk));
  gunzip.on('end', resolve);
  gunzip.on('error', reject);
  createReadStream(opts.index).on('error', reject).pipe(gunzip);
});
const index = JSON.parse(Buffer.concat(chunks).toString('utf8'));
const { totalPages } = index.meta;
const selectorEntries = Object.entries(index.selectors);
console.log(`${selectorEntries.length} selectors, ${totalPages} pages`);

const manifest = {
  selectors: {},
  components: {},
};

let countPending = 0;
let countSkipped = 0;
let countLowPriority = 0;

selectorEntries.sort((a, b) => {
  const countA = a[1].mode === 'list' ? a[1].pages.length : totalPages - a[1].pages.length;
  const countB = b[1].mode === 'list' ? b[1].pages.length : totalPages - b[1].pages.length;
  return countB - countA;
});

for (const [selector, entry] of selectorEntries) {
  const pageCount = entry.mode === 'list'
    ? entry.pages.length
    : totalPages - entry.pages.length;

  if (pageCount === 0) {
    countSkipped++;
  } else if (pageCount < minPages) {
    manifest.selectors[selector] = { pageCount, status: 'low-priority' };
    countLowPriority++;
  } else {
    manifest.selectors[selector] = { pageCount, status: 'pending' };
    countPending++;
  }
}

writeFileSync(opts.output, JSON.stringify(manifest, null, 2), 'utf8');

console.log(`Manifest written to ${opts.output}`);
console.log(`  Pending:      ${countPending}`);
console.log(`  Low-priority: ${countLowPriority}`);
console.log(`  Skipped:      ${countSkipped}`);
console.log(`  Total:        ${selectorEntries.length}`);
