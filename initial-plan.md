# Plan: UoS React Component Library — Agent & Skill Implementation

## Context

The goal is to build a React + Storybook component library by reverse-engineering an existing university website's CSS. Development is fully automated: Claude Code agents work in a loop, picking CSS selectors, analysing real DOM fragments, writing React components, and validating output.

This plan covers all files that need to be created: the `/build-components` skill that runs the loop, four subagent files (manifest, explore, implement, qa), two supporting Node.js scripts, and the project scaffolding.

User's existing tool: a CLI that accepts a CSS selector and returns a list of page URLs + a page count (used to populate the manifest).

---

## File Layout

```
/home/edward/uos-react/
├── .claude/
│   ├── skills/
│   │   └── build-components.md        ← /build-components entry point
│   └── agents/
│       ├── manifest.md                ← reads/updates selector-manifest.json in isolation
│       ├── explore.md                 ← DOM analysis → ComponentSpec JSON
│       ├── implement.md               ← ComponentSpec → React files on disk
│       └── qa.md                      ← Validates output, returns verdict JSON
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/                    ← generated components live here
│   ├── stories/                       ← generated stories live here
│   └── types/
│       └── component-spec.ts          ← TypeScript mirror of ComponentSpec schema
├── specs/                             ← one ComponentSpec JSON per component
├── tools/
│   ├── extract-component.js           ← fetches pages, extracts DOM subtrees
│   └── init-manifest.js               ← builds selector-manifest.json from index CLI
├── logs/                              ← per-iteration logs
├── selector-manifest.json             ← generated; orchestrator state
└── package.json / tsconfig.json
```

---

## Invocation Flow

```
User types: /build-components
      │
      ▼
skill loaded into main context → Claude runs orchestrator loop
      │
      ├─► @manifest agent  "pick-next"     ← manifest read in agent's own context
      │        └── returns { targetSelector, relatedSelectors, notes }
      │                    (selectors exactly as written in manifest, no URLs)
      │
      ├─► @explore agent                   ← fetches its own page samples
      │     receives: target + related selectors
      │     internally: queries index CLI for URLs, runs extract-component.js
      │        └── returns ComponentSpec JSON
      │
      ├─► @implement agent  (own context window)
      │        └── writes files to disk
      │
      ├─► npx tsc --noEmit  (bash)
      │
      ├─► @qa agent  (own context window)
      │        └── returns verdict JSON
      │
      └─► @manifest agent  "update"        ← manifest write in agent's own context
               └── returns "Updated N selectors as done for NewsTeaser"
```

**Why a manifest agent, not bash scripts:** The "pick-next" operation requires LLM judgment to:
- Detect utility classes (`.hidden`, `.clearfix`) that shouldn't become components, even if they have high page counts
- Identify context-ancestor selectors (e.g. `#main > .card`) and note them for the explore agent — but output the selector unchanged so the index CLI can look it up
- Group related selectors semantically (e.g. `.card`, `.card--featured`, `.card__header` belong together even if string prefix differs)

**Why URLs belong to the explore agent:** The explore agent decides how many pages it needs, whether to pull broader page context, and can stop fetching early if it has seen sufficient variation. This gives it full autonomy over data gathering.

The orchestrator's context window never sees the manifest JSON or any page HTML — only small targeted outputs from each agent.

---

## File 1: `.claude/agents/manifest.md`

```yaml
name: manifest
description: Reads and updates selector-manifest.json. Call with "pick-next" to get the next selector to implement, or "update" to mark selectors done after implementation.
tools: [Read, Write, Edit]
model: claude-sonnet-4-6
permissionMode: acceptEdits
maxTurns: 10
```

**System prompt covers two operations, selected by the first word of the incoming prompt:**

### Operation: `pick-next`

Read `selector-manifest.json`. Identify the next CSS selector group to implement.

**Rules for filtering candidates:**

1. Only consider entries with `status: "pending"`.
2. **Skip utility classes:** A selector is a utility class if it has a short, generic, non-semantic name (`.hidden`, `.clearfix`, `.sr-only`, `.text-center`, `.d-flex`, `.mt-3`, etc.) OR if it maps to a single CSS behaviour with no structural children. Mark these as `status: "skipped"`, `skipReason: "utility-class"` before returning.
3. **Note ancestor-context selectors but output them verbatim:** If a selector has a non-component ancestor (e.g. `#main > .card`, `.page-wrapper .btn`) where the ancestor is clearly page layout, do NOT modify the selector string — output it exactly as it appears in the manifest so the index CLI can look it up. Instead, add a note in the `notes` field (e.g. `"#main appears to be page context; the component is likely .card"`) so the explore agent knows to focus on the inner class.
4. **Skip component-internal selectors as standalone targets:** A selector like `.news-teaser .teaser-image` should not be picked as the top-level target — it will be covered when `.news-teaser` is implemented. If it appears as the highest-pageCount pending entry, skip it and pick the next true component-root.
5. Pick the candidate with the highest `pageCount` that represents a standalone component root.

**Rules for grouping related selectors:**

A related selector belongs to the same component family if:
- It shares the same root class (e.g. `.news-teaser .img`, `.news-teaser--featured` all relate to `.news-teaser`)
- It is a BEM-style modifier or element of the root (e.g. `__` or `--` variants)
- It is a state variant that always appears alongside the root (e.g. `.card.active`, `.card.open`)
- It is a descendant with a class that is only ever found inside the root component (contextual class)

Do NOT include as related:
- Selectors from clearly different components that happen to appear near the same element
- Generic utility classes found inside the component

**Output (JSON only, no prose):**
```json
{
  "targetSelector": ".news-teaser",
  "pageCount": 142,
  "relatedSelectors": [
    { "selector": ".news-teaser .teaser-image", "pageCount": 138 },
    { "selector": ".news-teaser .teaser-text", "pageCount": 142 },
    { "selector": ".news-teaser.featured", "pageCount": 34 }
  ],
  "notes": "Optional hints for the explore agent, e.g. context-ancestor observations"
}
```

**Selector fidelity:** Every selector string in `targetSelector` and `relatedSelectors` must be copied **exactly** from the manifest — no trimming, no stripping of ancestor parts. The page index CLI uses these strings verbatim for lookup.

If no suitable pending selectors remain, output:
```json
{ "targetSelector": null, "message": "All component-root selectors have been processed." }
```

Before returning, write any `status: "skipped"` changes you made back to the manifest.

---

### Operation: `update`

The prompt will include:
- `COMPONENT_NAME`: the PascalCase component name
- `SELECTORS_COVERED`: array of CSS selector strings
- `STATUS`: `"done"` or `"needs-review"`
- `SPEC_FILE`: path to the spec JSON
- `STORY_FILE`: path to the story file

Read `selector-manifest.json`. For each selector in `SELECTORS_COVERED`:
- If it exists in `manifest.selectors`, set `status` and `implementedBy`.
- If it doesn't exist (the explore agent discovered it wasn't in the original list), add it.

Add to `manifest.components`:
```json
{
  "ComponentName": {
    "selectors": ["...covered selectors..."],
    "specFile": "specs/ComponentName.json",
    "storyFile": "src/stories/ComponentName.stories.tsx"
  }
}
```

Write the manifest back to disk.

**Output (single line):**
```
Updated 5 selectors as "done" for component NewsTeaser.
```

---

## File 2: `.claude/skills/build-components.md`

**Purpose:** Loaded when user runs `/build-components`. Contains the full orchestrator loop logic for the main Claude session.

**Key sections of the system prompt:**

### Startup
1. Read `selector-manifest.json`. If absent: print instructions to run `init-manifest.js` and exit.
2. `mkdir -p src/components src/stories specs logs`.
3. Print summary: N pending selectors, N already done.

### Loop (repeat until @manifest pick-next returns `targetSelector: null`)

**Step 1 — Call @manifest pick-next**
Call the manifest agent with the prompt `pick-next`. It returns `{ targetSelector, pageCount, relatedSelectors, notes }` — only this small JSON slice, never the full manifest. If `targetSelector` is null, print the completion message and stop.

**Step 2 — Call @explore agent**
Pass a prompt containing: target selector, related selectors with page counts, and any notes from the manifest agent. The explore agent internally queries the index CLI for page URLs and calls `tools/extract-component.js` to fetch DOM fragments — the orchestrator never handles URLs or HTML. The explore agent returns a ComponentSpec JSON.

Validate the JSON against required fields (`componentName`, `rootClassName`, `selectorsCovered`, `props`, `stories`). If invalid, retry once. If still invalid: skip with `skipReason: "explore-failed"`. If the spec includes a note that no DOM matches were found, skip with `skipReason: "no-dom-match"`.

Check `componentName` is not already in the manifest's `components` map (conflict avoidance).

Write spec to `specs/<ComponentName>.json`.

**Step 4 — Call @implement agent**
Pass ComponentSpec JSON plus file conventions. Agent writes three files directly to disk. After return, verify files exist; retry once if missing.

**Step 5 — TypeScript check**
```bash
npx tsc --noEmit 2>&1
```
Note any errors for the QA pass.

**Step 6 — Call @qa agent**
Pass ComponentSpec JSON, generated component source, and stories source. The qa agent does not need the original HTML (it validates structure against the spec, not the raw pages). Receive verdict JSON `{ pass: boolean, issues: [...] }`.

If `pass === false` and error-severity issues exist: re-call @implement with the issues listed. Max 2 retries. After retries exhausted: set `status: "needs-review"`.

**Step 7 — Call @manifest update**
Call the manifest agent with a prompt containing `update`, `COMPONENT_NAME`, `SELECTORS_COVERED`, `STATUS`, `SPEC_FILE`, `STORY_FILE`. The agent reads and writes the manifest in its own isolated context. The skill only sees the short confirmation message returned.

Also append one JSON line to `logs/orchestrator.log`.

**Step 8 — Loop.** After 5 consecutive failures, stop and report.

### Prompt templates (embedded in skill)

**Explore prompt template:**
```
TARGET SELECTOR: {selector}
TARGET PAGE COUNT: {pageCount}

RELATED SELECTORS:
{relatedSelectors — one per line with page count}

NOTES FROM MANIFEST AGENT (if any):
{notes}

Fetch DOM samples using the index CLI and extract-component.js, then output a ComponentSpec JSON.
Output ONLY a valid ComponentSpec JSON object. No explanation, no markdown fences.
```

**Implement prompt template:**
```
Implement the following React component:

{ComponentSpec JSON}

FILE CONVENTIONS:
- src/components/{Name}/{Name}.tsx
- src/components/{Name}/index.ts
- src/stories/{Name}.stories.tsx
- TypeScript strict, react-jsx transform (no React import), className (not CSS modules)
- Storybook 8 CSF3 format

Write all three files now.
```

**QA prompt template:**
```
Validate this React component against its spec and original HTML.

SPEC: {ComponentSpec JSON}
COMPONENT: {file contents}
STORIES: {file contents}
ORIGINAL HTML: {fragments}

Return ONLY a verdict JSON: { "pass": boolean, "issues": [{severity, check, story, message}] }
```

---

## File 2: `.claude/agents/explore.md`

```yaml
name: explore
description: Given a target CSS selector, queries the page index for sample URLs, extracts DOM fragments, analyses them, and produces a ComponentSpec JSON
tools: [Read, Bash]
model: claude-sonnet-4-6
permissionMode: default
maxTurns: 20
```

**System prompt covers:**

- **Data gathering (first step):** Before analysing anything, gather DOM samples. The prompt will include the target selector and a set of related selectors. Use the index CLI to get page URLs for the target selector:
  ```bash
  query-index --selector ".news-teaser"
  # returns: { "pageCount": 142, "pages": ["/news/...", ...] }
  ```
  Then call the extraction script with those URLs:
  ```bash
  node tools/extract-component.js \
    --selector ".news-teaser" \
    --urls "/news/page1,/news/page2,..." \
    --base-url "https://www.example.ac.uk" \
    --max-samples 8 \
    --dedupe \
    --output /tmp/fragments.json
  ```
  You decide how many samples are enough. Start with 8. If the fragments all look very similar, you already have sufficient data. If there is high variation (many different class combinations or DOM shapes), fetch more.

  If the manifest agent noted an ancestor-context selector (e.g. `#main > .card`), use the full selector string for the index lookup (verbatim), but when calling extract-component.js you may also try the bare inner class (`.card`) to get broader samples. Use judgment about which fragments are more informative.

- **Output contract:** Output ONLY a single valid JSON object. No prose, no fences.
- **ComponentSpec schema** (full schema as inline reference including all fields).
- **Naming rule:** Convert root CSS class to PascalCase (`.news-teaser` → `NewsTeaser`).
- **Prop inference rules (in priority order):**
  1. Varying text content → `string` prop mapped to element + `"innerText"`
  2. Varying URL attributes (`src`, `href`) → `string` prop
  3. CSS class present on root in some samples but not others → `boolean` prop with `togglesClass`
  4. Child element absent in some samples → optional props for its content
  5. CMS IDs, `data-*`, inline styles → IGNORE
  6. `aria-*` that never varies → hardcode in JSX, not a prop
- **Subcomponent rule:** Only use subcomponents for 2+ structurally distinct, consistently-present sections with their own class names (e.g. `Card.Header`, `Card.Body`). Atoms are always flat.
- **Story rules:** Use REAL content from fragments. Name stories `Default`, `WithImage`, `Featured`, etc. Write 2–5 stories. Include a `Group` story if the component is typically rendered in a list.
- **Utility detection:** If the selector is clearly a utility class (no meaningful structure, single CSS property), set `componentName: null` and note `"utility-class"` in `notes`.
- **Worked example:** Full breadcrumb input → output example embedded in the prompt.

---

## File 3: `.claude/agents/implement.md`

```yaml
name: implement
description: Writes React component files and Storybook stories to disk based on a ComponentSpec JSON
tools: [Write, Read, Bash]
model: claude-sonnet-4-6
permissionMode: acceptEdits
maxTurns: 20
```

**System prompt covers:**

- **Files to write:** component `.tsx`, `index.ts`, `.stories.tsx`.
- **Component conventions:**
  - Named export, plain function syntax (not `React.FC`)
  - No `import React` (jsx transform)
  - `className` via template literal: `` `root-class${boolProp ? ' modifier' : ''}` ``
  - Optional sections: `{optProp && (<div>...</div>)}`
  - Props interface named `<ComponentName>Props`
  - Subcomponents: defined as separate functions in same file, attached as properties (`Card.Header = CardHeader`)
- **Index conventions:** export component + props type; export subcomponent props types if any.
- **Story conventions:**
  - `title: "Components/<ComponentName>"`
  - `tags: ['autodocs']`
  - All props via `args` (not `render`) unless it's a Group story
  - Group story uses a `render` function with 3 instances
- **Post-write step:** Run `npx tsc --noEmit`. Fix TypeScript errors before returning (up to 3 attempts). Confirm files written with `ls`.

---

## File 4: `.claude/agents/qa.md`

```yaml
name: qa
description: Validates a generated React component against its ComponentSpec and original HTML. Returns verdict JSON.
tools: [Read, Bash]
model: claude-haiku-4-5-20251001
permissionMode: default
maxTurns: 15
```

**System prompt covers:**

- **Output contract:** Output ONLY a verdict JSON object `{ "pass": boolean, "issues": [...] }`.
- **Checks to perform:**
  1. **Structural match:** Does root element and className match? Are optional sections conditionally rendered correctly?
  2. **Class coverage:** Does every selector in `selectorsCovered` correspond to a className in the JSX?
  3. **Props completeness:** Are all required props in the interface? Are optional props guarded?
  4. **Story quality:** Does every story in the spec have a corresponding export? Does Default use only required props?
  5. **TypeScript hygiene:** No `any` types (warn only), props interface present.
- **Severity:** `error` = component is broken. `warning` = quality issue, does not block `pass`. `info` = stylistic note.
- **`pass` rule:** `true` if and only if zero `severity: "error"` issues.

---

## File 5: `tools/extract-component.js`

**CLI interface:**
```bash
node tools/extract-component.js \
  --selector ".news-teaser" \
  --urls "/page1,/page2" \       # OR --urls-file urls.txt
  --base-url "https://example.ac.uk" \
  --max-samples 8 \
  --dedupe \
  --output /tmp/fragments.json   # defaults to stdout
```

**Implementation:**
1. Parse args with `commander`. Accept `--urls` (comma-sep) OR `--urls-file` (newline-sep).
2. Shuffle URLs, cap at `max-samples * 3` candidates.
3. For each URL: `node-fetch` GET `${baseUrl}${path}`. Skip 404s/errors gracefully.
4. Parse with `cheerio`. Run `$(selector)` to find matches. Take `$.html(el)` (outerHTML of the subtree).
5. **Deduplication (when `--dedupe`):** Strip all text nodes and `data-*` attributes; compare structural skeleton (element tag + class names only). Keep only the first of each identical skeleton.
6. Collect up to `--max-samples` unique fragments as `[{ url, fragmentIndex, html }]`.
7. Write JSON array to `--output` (or stdout).
8. **Exit code 0** if ≥1 fragment found; **exit code 1** if zero.

**Dependencies:** `cheerio`, `node-fetch`, `commander` (all in devDependencies).

---

## File 6: `tools/init-manifest.js`

**Purpose:** One-time setup. Calls the user's existing index CLI per selector to get page counts and URLs, then writes `selector-manifest.json`.

**CLI interface:**
```bash
node tools/init-manifest.js \
  --index-cli "query-index"  \   # name/path of the existing CLI tool
  --selector-list selectors.txt \ # one selector per line
  --output selector-manifest.json \
  --min-pages 3                   # auto-mark below threshold as "low-priority"
```

**Assumed existing CLI interface** (document in README, adjust to actual tool):
```bash
query-index --selector ".news-teaser"
# Output JSON: { "pageCount": 142, "pages": ["/news/...", ...] }
```

**Implementation:**
1. Read `--selector-list` (one selector per line, trim whitespace, skip empty/comment lines).
2. For each selector, run the index CLI via `child_process.execSync`. Parse JSON output.
3. Create manifest entry (just `pageCount` and `status` — no URL arrays; explore agent queries the index at runtime):
   - `pageCount < --min-pages` → `status: "low-priority"`
   - selector contains `::` → `status: "skipped"`, `skipReason: "pseudo-element"`
   - `pageCount === 0` → `status: "skipped"`, `skipReason: "dead-css"`
   - otherwise → `status: "pending"`
4. Write `{ selectors: {}, components: {} }` to `--output`.
5. Print summary: N pending, N skipped, N low-priority.

---

## Project Scaffolding Files

### `package.json`
Key deps: `react@^18`, `react-dom@^18`. Key devDeps: `typescript@^5`, `@storybook/react-vite@^8`, `@storybook/addon-essentials@^8`, `cheerio@^1`, `node-fetch@^3`, `commander@^12`, `jest@^29`, `@testing-library/react@^14`, `ts-jest@^29`, `jest-environment-jsdom@^29`.

### `tsconfig.json`
`"jsx": "react-jsx"`, `"strict": true`, `"module": "ESNext"`, `"moduleResolution": "bundler"`. Exclude `tools/` (plain Node.js scripts, not part of compiled output).

### `.storybook/main.ts`
`@storybook/react-vite` framework, stories glob `"../src/**/*.stories.@(ts|tsx)"`, `addon-essentials`.

### `.storybook/preview.ts`
Empty preview with standard controls matchers. **Note:** the global CSS import must be added manually once the path is known: `import '../path/to/global.css'`.

### `src/types/component-spec.ts`
TypeScript interfaces for `ComponentSpec`, `PropSpec`, `SubcomponentSpec`, `StorySpec` — mirrors the JSON schema used in agent prompts. Used by the implement agent as a reference.

---

## Pre-Processing Sequence (run once before first `/build-components`)

```bash
npm install
node tools/init-manifest.js --index-cli query-index --selector-list selectors.txt --min-pages 3
# Review selector-manifest.json and spot-check a few entries
# (Utility/internal classification is handled at runtime by the manifest agent)
mkdir -p src/components src/stories specs logs
# Manually add global CSS import to .storybook/preview.ts
/build-components
```

---

## Verification

1. Run pre-processing sequence above.
2. Type `/build-components` — Claude should print the startup summary (N pending selectors).
3. Watch it run one full iteration: extract → explore → implement → QA → manifest update.
4. Check `selector-manifest.json` — target selector should now show `status: "done"`.
5. Check `src/components/<Name>/` — three files should exist and compile with `npx tsc --noEmit`.
6. Run `npm run storybook` — the new story should appear in the Storybook UI with correct styling.

---

## Critical Files

| File | Why critical |
|---|---|
| `.claude/skills/build-components.md` | The orchestrator — all loop logic, prompt templates, and error handling live here |
| `.claude/agents/manifest.md` | Isolation layer that keeps the manifest out of the orchestrator's context; pick-next judgment quality determines what gets built and in what order |
| `.claude/agents/explore.md` | Prop inference rules and the worked example directly determine ComponentSpec quality |
| `tools/extract-component.js` | Fragment quality is the single biggest factor in explore agent accuracy; deduplication logic is the key detail |
| `tools/init-manifest.js` | Must correctly call the existing index CLI; its output format is the data contract for everything else |
| `selector-manifest.json` | Single source of truth; written to disk after every agent call so crashes are resumable |
