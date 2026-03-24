# UoS React Component Library

A React + Storybook component library reverse-engineered from an existing university website's global CSS. Development is fully automated via Claude Code agents.

## How it works

Run `/build-components` to start the pipeline. Claude loops through pending CSS selectors, builds a React component for each, and marks them done.

## Agent architecture

```
/build-components skill (orchestrator)
  │
  ├─► @manifest   — reads/writes selector-manifest.json in its own context
  ├─► @explore    — queries page index, fetches DOM fragments, produces ComponentSpec JSON
  ├─► @implement  — writes component .tsx, index.ts, and .stories.tsx to disk
  └─► @qa         — validates output against spec, returns verdict JSON
```

The orchestrator never loads the manifest JSON or page HTML directly — those stay inside the respective agents' context windows to avoid saturation over long runs.

## Setup (one-time)

```bash
npm install

# Build the selector manifest from the page index
node tools/init-manifest.js \
  --index-cli query-index \
  --selector-list selectors.txt \
  --min-pages 3

# Add the global CSS import to .storybook/preview.ts
# import '../path/to/global.css'

mkdir -p src/components src/stories specs logs
```

## Page index CLI

`query-index` is a bundled bin (registered in `package.json`, available after `npm install`) that queries the pre-built CSS selector index:

```bash
query-index --selector ".news-teaser"
# → { "pageCount": 142, "pages": ["https://...", ...] }
```

The explore agent calls this at runtime to get page URLs. URLs are not stored in the manifest.

The index is stored in `tools/index.json.gz` (generated artifact, not committed to git). To rebuild it:

```bash
npm run tools:crawl -- <sitemap-url> <css-url> --concurrency 10
```

The adapter script is `tools/query-index.js`.

## Key files

| File | Purpose |
|---|---|
| `selector-manifest.json` | Pipeline state — one entry per CSS selector with status, pageCount |
| `specs/<Name>.json` | ComponentSpec JSON produced by the explore agent |
| `src/components/<Name>/` | Generated React component + barrel export |
| `src/stories/<Name>.stories.tsx` | Generated Storybook stories |
| `logs/orchestrator.log` | One JSON line per completed iteration |

## selector-manifest.json shape

```json
{
  "selectors": {
    ".news-teaser": { "pageCount": 142, "status": "done", "implementedBy": "NewsTeaser" },
    ".breadcrumb":  { "pageCount": 310, "status": "pending" },
    ".hidden":      { "pageCount": 890, "status": "skipped", "skipReason": "utility-class" }
  },
  "components": {
    "NewsTeaser": {
      "selectors": [".news-teaser", ".news-teaser .teaser-text"],
      "specFile": "specs/NewsTeaser.json",
      "storyFile": "src/stories/NewsTeaser.stories.tsx"
    }
  }
}
```

Selector statuses: `pending` | `done` | `skipped` | `low-priority` | `needs-review`

## Component conventions

- Named exports, plain function syntax — no `React.FC`, no `export default`
- No `import React` — project uses react-jsx transform
- `className` via template literals — no CSS modules, no className libraries
- Boolean class toggles: `` `root${flag ? ' modifier' : ''}` ``
- Optional sections: `{prop && <div className="...">...</div>}`
- Props interface named `<ComponentName>Props`
- Subcomponents attached as properties: `Card.Header = CardHeader`

## Story conventions

- Storybook 8 CSF3 with `Meta` and `StoryObj` types
- `title: "Components/<ComponentName>"`, `tags: ['autodocs']`
- All props via `args`; Group stories use a `render` function
- Story names match exactly what the explore agent specifies in the ComponentSpec

## tools/

- `extract-component.js` — fetches live pages, extracts DOM subtrees matching a selector via cheerio, deduplicates by structural skeleton
- `init-manifest.js` — one-time setup; calls `query-index` per selector to build `selector-manifest.json`
- `query-index.js` — JSON adapter for the page index; outputs `{ pageCount, pages }` for a given selector
