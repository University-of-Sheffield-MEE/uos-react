# UoS React Component Library

A React + Storybook component library reverse-engineered from an existing university website's global CSS. Development is fully automated via Claude Code agents.

## How it works

Run `/build-components` to start the pipeline. Claude loops through pending CSS selectors, builds a React component for each, and marks them done.

## Agent architecture

```
/build-components skill (orchestrator)
  │
  ├─► @explore    — selects next selector, fetches DOM fragments, classifies as atom/molecule/layout/organism,
  │                 pivots to spec missing dependency atoms first, produces ComponentSpec JSON
  ├─► @implement  — writes component .tsx, index.ts, and .stories.tsx to disk
  ├─► @qa         — validates output against spec, returns verdict JSON
  └─► @manifest   — registers completed components in selector-manifest.json (update only)
```

The orchestrator never loads the manifest JSON or page HTML directly. All agents use `tools/manifest.js` CLI subcommands to keep context small over long runs.

## Atomic design

Components are classified as **atoms**, **molecules**, **layouts**, or **organisms**:

- **Atom** — Self-contained UI primitive: button, badge, label, avatar, icon, tag, input, pill
- **Molecule** — Composes or groups atoms in a consistent pattern: card, teaser, form row, action bar
- **Layout** — Structural/grid wrapper with no intrinsic content: page wrapper, grid, column, container
- **Organism** — Large, complex page section: header, footer, navigation, hero, article listing

**Ordering:** Atoms are always built before molecules that depend on them. When the explore agent determines a molecule needs an unbuilt atom, it pivots and specs the atom first.

**Child imports — two cases:**
- **Intrinsic (Case A):** An atom is structurally part of the molecule and always present in a fixed slot → imported into the component `.tsx`. Listed in `spec.childComponents`.
- **Slot/freeform (Case B):** Content is optional or variable → accepted as `children: ReactNode`. NOT listed in `childComponents`. Only imported in the stories file to demonstrate usage.

## Setup (one-time)

```bash
npm install

# Build the selector manifest from the page index
node tools/init-manifest.js --min-pages 3

# Add the global CSS import to .storybook/preview.ts
# import '../path/to/global.css'

mkdir -p src/components/atoms src/components/molecules src/components/layouts src/components/organisms \
         src/stories/atoms src/stories/molecules src/stories/layouts src/stories/organisms \
         specs logs
```

## Page index

The index is stored in `tools/index.json.gz`. The explore agent queries it at runtime via `tools/get-examples.js`.

## Key files

| File | Purpose |
|---|---|
| `selector-manifest.json` | Pipeline state — one entry per CSS selector with status, pageCount |
| `specs/<Name>.json` | ComponentSpec JSON produced by the explore agent |
| `src/components/atoms/<Name>/` | Generated atom component + barrel export |
| `src/components/molecules/<Name>/` | Generated molecule component + barrel export |
| `src/components/layouts/<Name>/` | Generated layout component + barrel export |
| `src/components/organisms/<Name>/` | Generated organism component + barrel export |
| `src/stories/atoms/<Name>.stories.tsx` | Generated atom Storybook stories |
| `src/stories/molecules/<Name>.stories.tsx` | Generated molecule Storybook stories |
| `src/stories/layouts/<Name>.stories.tsx` | Generated layout Storybook stories |
| `src/stories/organisms/<Name>.stories.tsx` | Generated organism Storybook stories |
| `logs/orchestrator.log` | One JSON line per completed iteration |

## selector-manifest.json shape

```json
{
  "selectors": {
    ".news-teaser": { "pageCount": 142, "status": "done", "implementedBy": "NewsTeaser", "atomicType": "molecule" },
    ".breadcrumb":  { "pageCount": 310, "status": "pending" },
    ".hidden":      { "pageCount": 890, "status": "skipped", "skipReason": "utility-class" }
  },
  "components": {
    "NewsTeaser": {
      "selectors": [".news-teaser", ".news-teaser .teaser-text"],
      "specFile": "specs/NewsTeaser.json",
      "storyFile": "src/stories/molecules/NewsTeaser.stories.tsx",
      "atomicType": "molecule"
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
- Files in `src/components/{atoms|molecules|layouts|organisms}/<Name>/`

## Story conventions

- Storybook 8 CSF3 with `Meta` and `StoryObj` types
- `title: "Atoms/<ComponentName>"` / `"Molecules/<ComponentName>"` / `"Layouts/<ComponentName>"` / `"Organisms/<ComponentName>"`
- `tags: ['autodocs']`
- All props via `args`; Group stories use a `render` function
- Story names match exactly what the explore agent specifies in the ComponentSpec
- Files in `src/stories/{atoms|molecules|layouts|organisms}/`

## tools/

- `get-examples.js` — fetches live pages for a selector and returns HTML fragments; supports pagination (`--page`) and context mode (`--context`)
- `init-manifest.js` — one-time setup; reads `tools/index.json.gz` directly to build `selector-manifest.json`
- `manifest.js` — low-level CLI used by agents to read/write `selector-manifest.json`. Subcommands:
  - `list-pending [--page N] [--per-page N]` — paginated pending selectors sorted by pageCount desc
  - `set-status --selectors '<json>' --status <s> [--skip-reason <r>]` — batch-update selector statuses
  - `search --query <str> [--status <s>]` — find selectors by substring
  - `register-component --component <Name> --selectors '<json>' --status <s> --atomic-type <atom|molecule|layout|organism> --spec-file <p> --story-file <p>` — mark selectors done and add component to manifest
  - `list-components` — list registered components with atomicType
  - `list-existing-components` — list all registered components of any type (used by explore and implement agents)
  - `summary` — print status counts and atom/molecule/layout/organism breakdown
