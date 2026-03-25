#!/usr/bin/env node
/**
 * manifest.js
 *
 * Low-level CLI for reading and writing selector-manifest.json.
 * Designed for use by agents to avoid loading the full file into context.
 *
 * Subcommands:
 *   list-pending          -- paginated pending selectors sorted by pageCount desc
 *   set-status            -- batch-set status on a list of selectors
 *   search                -- find selectors by substring
 *   register-component    -- mark selectors done and add to components map
 *   list-components       -- list registered components
 *   list-existing-components -- list all registered components of any type
 *   summary               -- count selectors by status
 *
 * Usage:
 *   node tools/manifest.js list-pending [--page N] [--per-page N] [--plain] [--manifest path]
 *   node tools/manifest.js set-status --selectors '<json>' --status <s> [--skip-reason <r>] [--manifest path]
 *   node tools/manifest.js search --query <str> [--status <s>] [--manifest path]
 *   node tools/manifest.js register-component --component <Name> --selectors '<json>' --status <s> --atomic-type <atom|molecule|organism|layout> --spec-file <path> --story-file <path> [--manifest path]
 *   node tools/manifest.js list-components [--manifest path]
 *   node tools/manifest.js list-existing-components [--manifest path]
 *   node tools/manifest.js summary [--manifest path]
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// --- Arg parsing helpers ---

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i];
    if (key.startsWith('--')) {
      const name = key.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith('--')) {
        args[name] = next;
        i++;
      } else {
        args[name] = true;
      }
    }
  }
  return args;
}

// --- Manifest I/O ---

function loadManifest(path) {
  if (!existsSync(path)) {
    console.error(`Manifest not found: ${path}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(path, 'utf8'));
}

function saveManifest(path, manifest) {
  writeFileSync(path, JSON.stringify(manifest, null, 2), 'utf8');
}

// --- Subcommands ---

function cmdListPending(args, manifestPath) {
  const manifest = loadManifest(manifestPath);
  const page = parseInt(args.page ?? '1', 10);
  const perPage = parseInt(args['per-page'] ?? '30', 10);

  const pending = Object.entries(manifest.selectors)
    .filter(([, entry]) => entry.status === 'pending')
    .sort((a, b) => b[1].pageCount - a[1].pageCount);

  const totalPending = pending.length;
  const totalPages = Math.max(1, Math.ceil(totalPending / perPage));
  const start = (page - 1) * perPage;
  const slice = pending.slice(start, start + perPage);

  if (args.plain) {
    for (const [selector, entry] of slice) {
      process.stdout.write(`${selector} ${entry.pageCount}\n`);
    }
    process.stdout.write(`# page ${page}/${totalPages}, ${totalPending} pending total\n`);
    return;
  }

  const result = {
    page,
    perPage,
    totalPending,
    totalPages,
    results: slice.map(([selector, entry]) => ({ selector, pageCount: entry.pageCount })),
  };

  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

function cmdSetStatus(args, manifestPath) {
  if (!args.selectors || !args.status) {
    console.error('Usage: set-status --selectors \'["sel1","sel2"]\' --status <status> [--skip-reason <reason>]');
    process.exit(1);
  }

  const selectors = JSON.parse(args.selectors);
  const status = args.status;
  const skipReason = args['skip-reason'];

  const manifest = loadManifest(manifestPath);

  let count = 0;
  for (const selector of selectors) {
    if (manifest.selectors[selector]) {
      manifest.selectors[selector].status = status;
      if (skipReason) manifest.selectors[selector].skipReason = skipReason;
    } else {
      // Add new entry
      const entry = { pageCount: 0, status };
      if (skipReason) entry.skipReason = skipReason;
      manifest.selectors[selector] = entry;
    }
    count++;
  }

  saveManifest(manifestPath, manifest);
  process.stdout.write(`Updated ${count} selector${count === 1 ? '' : 's'} to "${status}".\n`);
}

function cmdSearch(args, manifestPath) {
  if (!args.query) {
    console.error('Usage: search --query <string> [--status <filter>]');
    process.exit(1);
  }

  const query = args.query.toLowerCase();
  const statusFilter = args.status;

  const manifest = loadManifest(manifestPath);

  const results = Object.entries(manifest.selectors)
    .filter(([selector, entry]) => {
      if (!selector.toLowerCase().includes(query)) return false;
      if (statusFilter && entry.status !== statusFilter) return false;
      return true;
    })
    .sort((a, b) => b[1].pageCount - a[1].pageCount)
    .map(([selector, entry]) => ({
      selector,
      pageCount: entry.pageCount,
      status: entry.status,
      ...(entry.skipReason ? { skipReason: entry.skipReason } : {}),
      ...(entry.implementedBy ? { implementedBy: entry.implementedBy } : {}),
    }));

  if (args.plain) {
    for (const r of results) {
      process.stdout.write(`${r.selector} ${r.pageCount} ${r.status}${r.implementedBy ? ` (${r.implementedBy})` : ''}\n`);
    }
    return;
  }

  process.stdout.write(JSON.stringify({ query: args.query, results }, null, 2) + '\n');
}

function cmdRegisterComponent(args, manifestPath) {
  if (!args.component || !args.selectors || !args.status) {
    console.error('Usage: register-component --component <Name> --selectors \'[...]\' --status <status> --atomic-type <atom|molecule|organism|layout> [--spec-file <path>] [--story-file <path>]');
    process.exit(1);
  }

  const componentName = args.component;
  const selectors = JSON.parse(args.selectors);
  const status = args.status;
  const atomicType = args['atomic-type'];
  const specFile = args['spec-file'] ?? '';
  const storyFile = args['story-file'] ?? '';

  const manifest = loadManifest(manifestPath);

  // Update selector entries
  for (const selector of selectors) {
    if (manifest.selectors[selector]) {
      manifest.selectors[selector].status = status;
      manifest.selectors[selector].implementedBy = componentName;
      if (atomicType) manifest.selectors[selector].atomicType = atomicType;
    } else {
      const entry = { pageCount: 0, status, implementedBy: componentName };
      if (atomicType) entry.atomicType = atomicType;
      manifest.selectors[selector] = entry;
    }
  }

  // Add to components map (unless _skipped)
  if (componentName !== '_skipped') {
    manifest.components = manifest.components ?? {};
    manifest.components[componentName] = {
      selectors,
      specFile,
      storyFile,
      ...(atomicType ? { atomicType } : {}),
    };
  }

  saveManifest(manifestPath, manifest);
  process.stdout.write(`Registered component ${componentName} covering ${selectors.length} selector${selectors.length === 1 ? '' : 's'}.\n`);
}

function cmdListComponents(args, manifestPath) {
  const manifest = loadManifest(manifestPath);
  const components = manifest.components ?? {};

  const result = Object.entries(components).map(([name, entry]) => ({
    name,
    atomicType: entry.atomicType ?? null,
    selectorCount: (entry.selectors ?? []).length,
    specFile: entry.specFile,
    storyFile: entry.storyFile,
  }));

  if (args.plain) {
    for (const c of result) {
      process.stdout.write(`${c.name} ${c.atomicType ?? 'unknown'} (${c.selectorCount} selectors)\n`);
    }
    return;
  }

  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

function cmdListExistingComponents(args, manifestPath) {
  const manifest = loadManifest(manifestPath);
  const components = manifest.components ?? {};

  const typeOrder = { atom: 0, molecule: 1, layout: 2, organism: 3 };

  const result = Object.entries(components)
    .sort((a, b) => {
      const ta = typeOrder[a[1].atomicType] ?? 4;
      const tb = typeOrder[b[1].atomicType] ?? 4;
      if (ta !== tb) return ta - tb;
      return a[0].localeCompare(b[0]);
    })
    .map(([name, entry]) => ({
      name,
      atomicType: entry.atomicType ?? null,
      primarySelector: (entry.selectors ?? [])[0] ?? null,
    }));

  if (args.plain) {
    for (const c of result) {
      process.stdout.write(`${c.atomicType ?? 'unknown'} ${c.name} ${c.primarySelector ?? ''}\n`.trimEnd() + '\n');
    }
    return;
  }

  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

function cmdSummary(args, manifestPath) {
  const manifest = loadManifest(manifestPath);
  const counts = {};

  for (const entry of Object.values(manifest.selectors)) {
    counts[entry.status] = (counts[entry.status] ?? 0) + 1;
  }

  const components = manifest.components ?? {};
  const componentCount = Object.keys(components).length;
  const atomCount = Object.values(components).filter(c => c.atomicType === 'atom').length;
  const moleculeCount = Object.values(components).filter(c => c.atomicType === 'molecule').length;
  const layoutCount = Object.values(components).filter(c => c.atomicType === 'layout').length;
  const organismCount = Object.values(components).filter(c => c.atomicType === 'organism').length;

  const parts = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([status, n]) => `${n} ${status}`);

  const breakdownParts = [
    atomCount > 0 ? `${atomCount} atoms` : null,
    moleculeCount > 0 ? `${moleculeCount} molecules` : null,
    layoutCount > 0 ? `${layoutCount} layouts` : null,
    organismCount > 0 ? `${organismCount} organisms` : null,
  ].filter(Boolean);
  const atomicBreakdown = breakdownParts.length > 0 ? ` (${breakdownParts.join(', ')})` : '';

  process.stdout.write(parts.join(', ') + `, ${componentCount} component${componentCount === 1 ? '' : 's'} registered${atomicBreakdown}\n`);
}

// --- Main ---

const [, , subcommand, ...rest] = process.argv;
const args = parseArgs(rest);
const manifestPath = resolve(args.manifest ?? 'selector-manifest.json');

switch (subcommand) {
  case 'list-pending':            cmdListPending(args, manifestPath); break;
  case 'set-status':              cmdSetStatus(args, manifestPath); break;
  case 'search':                  cmdSearch(args, manifestPath); break;
  case 'register-component':      cmdRegisterComponent(args, manifestPath); break;
  case 'list-components':          cmdListComponents(args, manifestPath); break;
  case 'list-existing-components': cmdListExistingComponents(args, manifestPath); break;
  case 'summary':                  cmdSummary(args, manifestPath); break;
  default:
    console.error(`Unknown subcommand: ${subcommand}`);
    console.error('Available: list-pending, set-status, search, register-component, list-components, list-existing-components, summary');
    process.exit(1);
}
