#!/usr/bin/env node
// index.json.gz format (gzip-compressed JSON):
//
// {
//   meta: {
//     totalPages: number,       // total pages crawled
//     crawledAt: string,        // ISO timestamp
//     threshold: number,        // floor(totalPages / 2) — the list/omit switchover point
//   },
//   pageIndex: string[],        // all crawled URLs, in crawl order; position = page ID
//   selectors: {
//     [selector: string]: {
//       mode: 'list' | 'omit',
//       pages: number[],        // page IDs (indices into pageIndex)
//     }
//   }
// }
//
// mode 'list': pages where the selector IS present (used when matches < 50% of pages)
// mode 'omit': pages where the selector IS ABSENT (used when matches >= 50% of pages)
// Whichever list is shorter is stored, keeping the file compact.

import { createGunzip } from 'zlib';
import { createReadStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let selector = null;
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--selector' && args[i + 1]) selector = args[++i];
}

if (!selector) {
  process.stderr.write('Usage: query-index --selector "<selector>"\n');
  process.exit(1);
}

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

const entry = index.selectors[selector];

if (!entry) {
  process.stdout.write(JSON.stringify({ pageCount: 0, pages: [] }) + '\n');
  process.exit(0);
}

let pages;
if (entry.mode === 'list') {
  pages = entry.pages.map(i => index.pageIndex[i]);
} else {
  const absentSet = new Set(entry.pages);
  pages = index.pageIndex.filter((_, i) => !absentSet.has(i));
}

process.stdout.write(JSON.stringify({ pageCount: pages.length, pages }) + '\n');
