# Agent Orchestration Design

## Overall Flow

```
Orchestrator
  │
  ├─▶ picks next selector(s)
  ├─▶ calls Explore agent
  │      └─▶ returns ComponentSpec
  ├─▶ reviews spec (sanity checks)
  ├─▶ calls Implement agent with spec
  │      └─▶ writes code + stories
  ├─▶ calls QA agent
  │      └─▶ validates output
  ├─▶ marks selectors as done
  └─▶ loops
```

The orchestrator is the only agent that calls other agents. The explore agent does **not** call the implement agent directly. This keeps the orchestrator in control and gives it a checkpoint between exploration and implementation where it can validate, adjust, or skip.

---

## 1. Agent Inputs and Outputs

### Orchestrator (stateful, runs the loop)

**State it maintains** — a manifest file on disk (e.g. `selector-manifest.json`):

```json
{
  "selectors": {
    ".news-teaser": {
      "pageCount": 142,
      "status": "done",
      "implementedBy": "NewsTeaser"
    },
    ".news-teaser .teaser-text p": {
      "pageCount": 142,
      "status": "done",
      "implementedBy": "NewsTeaser"
    },
    ".breadcrumb": {
      "pageCount": 310,
      "status": "pending"
    },
    ".hidden": {
      "pageCount": 890,
      "status": "skipped",
      "skipReason": "utility-class"
    }
  },
  "components": {
    "NewsTeaser": {
      "selectors": [".news-teaser", ".news-teaser .teaser-text p", ".news-teaser .teaser-image"],
      "specFile": "specs/NewsTeaser.json",
      "storyFile": "src/stories/NewsTeaser.stories.tsx"
    }
  }
}
```

The orchestrator's job each iteration:
1. Read the manifest.
2. Find the highest-pageCount pending selector.
3. Also gather any **related selectors** — i.e. selectors that share the same root class (e.g. all selectors starting with `.news-teaser`). Pass these as a group to the explore agent, since they likely belong to the same component.
4. Call the explore agent.
5. Review the returned spec (automated checks — see QA section).
6. Call the implement agent.
7. Run QA.
8. Update the manifest: mark all selectors covered by the new component(s) as `done`.

### Explore Agent

**Input prompt includes:**

```
You are analyzing a web component to produce a specification for a React component.

TARGET SELECTOR: .news-teaser
RELATED SELECTORS (likely part of the same component):
  - .news-teaser .teaser-text p  (142 pages)
  - .news-teaser .teaser-image   (138 pages)
  - .news-teaser.featured         (34 pages)

Here are extracted DOM samples from pages where this selector appears:

--- Sample 1 (from /news/annual-report-2024) ---
<div class="news-teaser featured">
  <div class="teaser-image">
    <img src="/images/report.jpg" alt="Annual Report" />
  </div>
  <div class="teaser-text">
    <h3>Annual Report 2024</h3>
    <p>Our latest annual report is now available...</p>
  </div>
</div>

--- Sample 2 (from /news/campus-update) ---
<div class="news-teaser">
  <div class="teaser-text">
    <h3>Campus Update</h3>
    <p>Construction on the new library...</p>
  </div>
</div>

--- Sample 3 ... ---

Produce a ComponentSpec as described below.
```

**Critical pre-processing step:** Before calling the explore agent, the orchestrator should use a DOM extraction tool to pull out **only the subtree rooted at the target selector** from each sample page. Don't send entire pages. More on this below.

**Output — ComponentSpec JSON:**

```json
{
  "componentName": "NewsTeaser",
  "description": "A teaser card for news articles, with optional image and featured styling.",
  "rootElement": "div",
  "rootClassName": "news-teaser",
  "selectorsCovered": [
    ".news-teaser",
    ".news-teaser .teaser-text",
    ".news-teaser .teaser-text p",
    ".news-teaser .teaser-text h3",
    ".news-teaser .teaser-image",
    ".news-teaser .teaser-image img",
    ".news-teaser.featured"
  ],
  "props": [
    {
      "name": "title",
      "type": "string",
      "required": true,
      "mapsTo": { "element": ".teaser-text h3", "attribute": "innerText" }
    },
    {
      "name": "summary",
      "type": "string",
      "required": true,
      "mapsTo": { "element": ".teaser-text p", "attribute": "innerText" }
    },
    {
      "name": "imageUrl",
      "type": "string",
      "required": false,
      "mapsTo": { "element": ".teaser-image img", "attribute": "src" }
    },
    {
      "name": "imageAlt",
      "type": "string",
      "required": false,
      "mapsTo": { "element": ".teaser-image img", "attribute": "alt" }
    },
    {
      "name": "isFeatured",
      "type": "boolean",
      "default": false,
      "mapsTo": { "togglesClass": "featured", "on": "root" }
    }
  ],
  "subcomponents": [],
  "stories": [
    {
      "name": "Default",
      "description": "Standard news teaser without image",
      "props": {
        "title": "Campus Update",
        "summary": "Construction on the new library is proceeding on schedule."
      }
    },
    {
      "name": "WithImage",
      "description": "News teaser with an image",
      "props": {
        "title": "Annual Report 2024",
        "summary": "Our latest annual report is now available for download.",
        "imageUrl": "/images/report.jpg",
        "imageAlt": "Annual Report"
      }
    },
    {
      "name": "Featured",
      "description": "Featured news teaser with highlight styling",
      "props": {
        "title": "Annual Report 2024",
        "summary": "Our latest annual report is now available for download.",
        "imageUrl": "/images/report.jpg",
        "imageAlt": "Annual Report",
        "isFeatured": true
      }
    }
  ],
  "subcomponentSpec": null,
  "notes": "The image div is conditionally rendered — it's absent in ~30% of samples. The .featured class appears on the root element alongside .news-teaser."
}
```

When subcomponents are warranted (complex, deeply nested components like a `Card` with `Card.Header`, `Card.Body`, `Card.Footer`), the spec uses:

```json
{
  "componentName": "Card",
  "subcomponents": [
    {
      "name": "Header",
      "rootElement": "div",
      "rootClassName": "card-header",
      "props": [
        { "name": "children", "type": "ReactNode", "required": true }
      ]
    }
  ]
}
```

### Implement Agent

**Input:** The full ComponentSpec JSON plus instructions on file conventions (where to put the component, how stories are structured, import patterns, etc.).

**Output:** The agent writes files directly to disk. It produces:
- `src/components/NewsTeaser/NewsTeaser.tsx`
- `src/components/NewsTeaser/index.ts`
- `src/stories/NewsTeaser.stories.tsx`
- `src/components/NewsTeaser/NewsTeaser.test.tsx` (optional — see QA)

No JSON output needed — the orchestrator checks for file existence and runs QA.

---

## 2. How the Explore Agent Analyzes Pages

### DOM Extraction (pre-processing, before the explore agent runs)

This is the most important design decision. **Do not send raw HTML pages to the explore agent.** Instead, build a small CLI tool or script that:

1. Takes a URL and a CSS selector.
2. Fetches the page (or reads from a local mirror/crawl cache).
3. Uses a DOM parser (cheerio, jsdom) to find all elements matching the selector.
4. For each match, serializes the **outerHTML of that element** (the subtree rooted at the match).
5. Returns a list of these extracted fragments.

This can be a simple Node script the orchestrator calls:

```bash
node extract-component.js --selector ".news-teaser" --urls urls.txt --max-samples 8
```

Output: a JSON file with extracted HTML fragments, one per page, plus the source URL.

**Why 8 samples?** You need enough to see variation (props, optional children, class toggles) but not so many that you blow the context window or confuse the agent with noise. 5–10 is the sweet spot. Pick samples that are diverse — the orchestrator can do a quick hash/length check to avoid sending 8 identical fragments.

### Guiding the explore agent on props vs. noise

The explore agent's prompt should include explicit heuristics:

```
RULES FOR IDENTIFYING PROPS:
- If an attribute or text content varies across samples in a MEANINGFUL pattern
  (e.g. every sample has a different title), it's a prop.
- If a class appears on the root element in SOME samples but not others
  (e.g. "featured"), it's a boolean prop that toggles that class.
- If a child element is present in some samples but absent in others,
  it's a conditionally-rendered section controlled by an optional prop.
- If something varies but appears random or irrelevant (e.g. different
  whitespace, different unrelated data attributes from a CMS), ignore it.
- CMS-generated IDs, data attributes (data-id, data-nid, etc.), and
  inline styles should be ignored unless they follow a clear pattern
  tied to component behavior.
- aria-* attributes and role attributes should be preserved as-is in the
  component (hardcoded, not props), unless they vary meaningfully.
```

### What information is needed for good Storybook stories

The explore agent should produce stories that:
- Cover each meaningful prop variation (the "default" case, each optional prop toggled on, each boolean toggled).
- Use **realistic content** pulled from the actual samples — not lorem ipsum. The agent has real page data; it should use real titles, real descriptions, real image URLs.
- Name stories clearly: `Default`, `WithImage`, `Featured`, `WithLongTitle`, etc.
- Include at least one story that shows the component in a "group" if the component is typically rendered in a list (e.g. a grid of cards).

---

## 3. Communication Flow

```
Orchestrator
  │
  ├─1─▶ extract-component CLI (not an agent, just a script)
  │       └── returns HTML fragments
  │
  ├─2─▶ Explore Agent (receives fragments + selector info)
  │       └── returns ComponentSpec JSON
  │
  ├─3──── Orchestrator validates spec (automated checks)
  │
  ├─4─▶ Implement Agent (receives validated spec)
  │       └── writes files to disk
  │
  ├─5─▶ QA Agent (or automated QA step)
  │       └── returns pass/fail + issues
  │
  └─6──── Orchestrator updates manifest
```

The explore agent **reports back to the orchestrator**. It does not call the implement agent. This gives the orchestrator a checkpoint where it can:
- Validate the spec structure (all required fields present, selectors look right).
- Check for obvious issues (component name conflicts, selector overlaps with already-implemented components).
- Decide to skip or flag if the spec looks wrong.

---

## 4. Tracking Selectors

### Matching compound selectors to components

When the explore agent returns `selectorsCovered`, the orchestrator marks all of those as done. But how does the orchestrator know whether `.news-teaser .teaser-text p` is covered?

**Two-phase matching:**

**Phase A — before calling explore:** The orchestrator groups selectors by their root class. All selectors starting with `.news-teaser` are grouped together and sent to the explore agent as "related selectors." This is a simple string-prefix match on the first class in the selector.

**Phase B — after explore returns:** The explore agent explicitly lists every selector it covers in `selectorsCovered`. The orchestrator does an exact-match pass over the pending selectors and marks matches as done. Any related selectors that the explore agent did *not* list remain pending — they may belong to a different component or may be dead CSS.

### Manifest as the single source of truth

The manifest file is written to disk after every iteration. If the orchestrator crashes, it can resume from the manifest. The manifest records:
- Every selector, its status, and which component implements it.
- Every component created, what selectors it covers, and where its files live.

---

## 5. Edge Cases

### Utility classes (`.hidden`, `.clearfix`, `.text-center`)

**Detection heuristic:** Before the loop starts, run a pre-classification step. A utility class typically:
- Has a very short, generic name.
- Appears on many *different* types of elements across the site (not just divs inside one component).
- Has a very small CSS rule (1–3 properties).
- Doesn't have descendant selectors in the CSS.

You can build a simple classifier prompt that takes the CSS rule and the selector and asks: "Is this a reusable component, a utility class, or part of a component's internal styling?" Run this for all selectors upfront and pre-mark utilities as `skipped` in the manifest.

Alternatively, have the orchestrator check: if the CSS for a selector is ≤3 declarations and has no descendant selectors in the stylesheet, auto-skip it.

### Other edge cases to handle

| Edge Case | How to Handle |
|---|---|
| **State classes** (`.active`, `.open`, `.expanded`) | These are almost always boolean prop toggles on another component. The explore agent should recognize them as modifiers, not standalone components. If they appear as standalone selectors, the orchestrator should check if they're always combined with a component class and group them accordingly. |
| **Pseudo-element selectors** (`.component::before`) | These are pure CSS concerns — no React component needed. Auto-skip any selector containing `::`. |
| **Media query variants** | Same as pseudo-elements — these are CSS-only. The component just needs the right classes; the CSS handles responsiveness. Skip. |
| **Layout/wrapper selectors** (`.container`, `.row`, `.col-*`) | These are either utility classes or grid/layout primitives. You could create thin wrapper components for them, or skip them if the project doesn't need layout components. Decide up front and pre-mark in the manifest. |
| **Selectors that exist in CSS but appear on zero pages** | Dead CSS. Pre-mark as `skipped` with reason `dead-css`. |
| **Selectors used on only 1–2 pages** | These may be one-off styling rather than reusable components. Consider a threshold (e.g. skip anything with < 3 pages) or handle them in a low-priority final pass. |
| **Overlapping components** (a selector is used inside two different parent components) | The explore agent may discover that `.teaser-image` is used inside both `.news-teaser` and `.event-teaser`. It should note this. The orchestrator can decide whether to create a shared subcomponent or let each parent define its own version. |
| **Components that are just a single element** (e.g. `.btn-primary` is just a styled `<button>`) | These are still valid components, just simple ones. The explore agent should produce a minimal spec. Don't skip them — a `<Button variant="primary">` component is useful. |
| **Deeply nested selectors that cross component boundaries** | e.g. `.sidebar .news-teaser .teaser-text` — the `.sidebar` part is context, not part of the `NewsTeaser` component. The explore agent should be instructed to identify the component boundary and ignore ancestor context selectors. |

---

## 6. QA Step

Yes, include QA. There are two levels:

### Automated checks (run by the orchestrator, no agent needed)

After the implement agent writes files:

1. **TypeScript compiles** — run `tsc --noEmit` on the new component. If it fails, send the errors back to the implement agent for a fix.
2. **Storybook builds** — run `npx storybook build` (or a faster check like importing the story in a test). If it fails, send errors back.
3. **Selector coverage check** — parse the generated component's JSX and verify that every className referenced in the ComponentSpec actually appears in the output.
4. **Snapshot test** — render each story and snapshot it. This doesn't validate correctness on the first run, but it establishes a baseline for future regressions.

### QA Agent (optional, for higher confidence)

A separate agent that receives:
- The ComponentSpec.
- The generated component code.
- The original HTML samples.

Its job: render the component with each story's props (using a test renderer or jsdom) and compare the output HTML structure against the original samples. It checks:
- Do the class names match?
- Is the DOM nesting correct?
- Are the right elements present/absent based on props?

It returns a structured verdict:

```json
{
  "pass": false,
  "issues": [
    {
      "severity": "error",
      "story": "WithImage",
      "message": "Component outputs <figure> but original uses <div> for .teaser-image"
    },
    {
      "severity": "warning",
      "story": "Default",
      "message": "Component adds an empty alt attribute; original has no alt attribute when image is absent"
    }
  ]
}
```

If there are errors, the orchestrator sends the issues back to the implement agent for a fix (with a retry limit of 2–3 attempts before flagging for human review).

---

## 7. Pre-Processing Recommendations

Before starting the loop, run these one-time setup steps:

1. **Build the selector manifest** from your CSS files and page-count data. Every selector gets an entry.
2. **Pre-classify selectors** into: `component-root` (likely a component), `component-internal` (descendant of a component root), `utility` (skip), `dead` (zero pages, skip), `low-priority` (< 3 pages).
3. **Group related selectors** by shared root prefix.
4. **Build the DOM extraction tool** so the explore agent gets clean fragments, not raw pages.
5. **Set up the project scaffolding** — the component directory structure, Storybook config, tsconfig, and any shared types the implement agent will need.

---

## 8. Prompt Tips for Agent Reliability

- **Give each agent a focused role.** The explore agent should not write code. The implement agent should not re-analyze HTML. Separation of concerns reduces errors.
- **Use structured output with a schema.** Give the explore agent the exact JSON schema for ComponentSpec and tell it to output only that JSON. Validate the output against the schema before proceeding.
- **Include 1–2 worked examples** in each agent's system prompt. Show a complete input → output example for a simple component (like a breadcrumb) so the agent has a concrete reference.
- **Limit retries.** If an agent fails 3 times on the same task, log it and move on. Some selectors will be genuinely ambiguous and need human review.
- **Log everything.** Save the full prompt and response for each agent call. When something goes wrong, you'll want to see exactly what the agent saw and said.