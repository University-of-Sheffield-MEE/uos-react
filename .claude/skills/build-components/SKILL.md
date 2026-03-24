---
name: build-components
description: Build pipeline that loops through pending CSS selectors in selector-manifest.json and implements each as a React component. Invokes the manifest, explore, implement, and QA sub-agents in sequence. Commits each component to git on success.
disable-model-invocation: true
---

You are running the UoS React component library build pipeline. Your job is to loop through the pending CSS selectors in `selector-manifest.json`, implement each one as a React component, and update the manifest as you go.

## Configuration

Set these values before starting (adjust to match the actual project):

```
BASE_URL = https://www.sheffield.ac.uk   ← replace with the real site base URL
MAX_QA_RETRIES = 2
MAX_IMPLEMENT_RETRIES = 2              ← retries for missing files after implement
```

## Startup

1. Check that `selector-manifest.json` exists. If it does not, stop and print:
   ```
   selector-manifest.json not found.
   Run: node tools/init-manifest.js --index-cli <query-tool> --selector-list <selectors.txt>
   ```

2. Run:
   ```bash
   mkdir -p src/components src/stories specs logs
   ```

3. Run:
   ```bash
   node tools/manifest.js summary
   ```
   Print the output as a summary line:
   ```
   Build pipeline starting. <summary output>
   ```

## The Loop

Repeat until the manifest agent reports no more pending selectors.

---

### Step 1 — Get the next selector

Call the manifest agent with the prompt:
```
pick-next
```

It returns a small JSON object: `{ targetSelector, pageCount, relatedSelectors, notes }`.

If `targetSelector` is null, print the completion message from the agent and stop the loop.

---

### Step 2 — Call the explore agent

Call the explore agent with this prompt (fill in the actual values):

```
TARGET SELECTOR: <targetSelector>
TARGET PAGE COUNT: <pageCount>

RELATED SELECTORS:
<if relatedSelectors is empty, write "none"; otherwise list each as "  - <selector>  (<pageCount> pages)">

BASE URL: <BASE_URL>

NOTES FROM MANIFEST AGENT:
<notes — or "none" if empty>

Fetch DOM samples using the index CLI and extract-component.js, then produce a ComponentSpec JSON.
Output ONLY a valid ComponentSpec JSON object. No explanation, no markdown fences.
```

The explore agent will query the index, fetch fragments, analyse them, and return a ComponentSpec JSON object.

**Validate the returned JSON:**
- Must have: `componentName`, `rootClassName`, `selectorsCovered`, `props`, `stories`
- `componentName` must be PascalCase (or null for utility/no-match)
- `selectorsCovered` must be a non-empty array of strings starting with `.`
- `stories` must have at least one entry

If validation fails, retry the explore agent once with the note: `"Your previous response was not valid JSON or was missing required fields. Try again."`

If it fails again, or if `componentName` is null (utility or no-match), call the manifest agent with:
```
update
COMPONENT_NAME: _skipped
SELECTORS_COVERED: ["<targetSelector>"]
STATUS: skipped
SPEC_FILE:
STORY_FILE:
```
Then continue to the next iteration.

**Check for component name conflicts:** If `componentName` already appears in the manifest's `components` map, append `2` to the name (e.g. `NewsTeaser2`), then check again; increment the number until the name is unique. Note the rename in the log. After renaming, also update the `componentName` field inside the spec JSON object to match the renamed value, so that the implement agent generates files with the correct name.

**Save the spec:** Write the (possibly updated) ComponentSpec JSON to `specs/<ComponentName>.json`.

---

### Step 3 — Call the implement agent

Call the implement agent with this prompt:

```
Implement the following React component based on this ComponentSpec:

<ComponentSpec JSON>

FILE CONVENTIONS:
- Component: src/components/<ComponentName>/<ComponentName>.tsx
- Index: src/components/<ComponentName>/index.ts
- Stories: src/stories/<ComponentName>.stories.tsx
- TypeScript strict mode, react-jsx transform (no React import needed)
- Plain className strings (no CSS modules, no className libraries)
- Storybook 8 CSF3 format with Meta and StoryObj types

Write all three files now.
```

After the agent returns, verify the files exist:
- `src/components/<ComponentName>/<ComponentName>.tsx`
- `src/components/<ComponentName>/index.ts`
- `src/stories/<ComponentName>.stories.tsx`

Use `ls` to check. If any are missing, call the implement agent again with the full implement prompt (including the ComponentSpec JSON and file conventions), appending: `"Note: these files were not created on the previous attempt and must be written now: <list>."` Allow up to MAX_IMPLEMENT_RETRIES retries.

---

### Step 4 — TypeScript check

```bash
npx tsc --noEmit 2>&1
```

Note any errors. Pass them to the QA agent as context. When reviewing TSC output, only consider errors that reference files inside `src/components/<ComponentName>/` or `src/stories/<ComponentName>.stories.tsx` — errors in other components are pre-existing and not this component's responsibility.

---

### Step 5 — Call the QA agent

**Before each QA call** (initial and after every fix attempt), read the current contents of all three generated files from disk. Do not reuse file contents from a previous read.

```
QA TASK: Validate the following React component against its spec.

COMPONENT SPEC:
<ComponentSpec JSON>

GENERATED COMPONENT (src/components/<ComponentName>/<ComponentName>.tsx):
<file contents>

GENERATED INDEX (src/components/<ComponentName>/index.ts):
<file contents>

GENERATED STORIES (src/stories/<ComponentName>.stories.tsx):
<file contents>

TYPESCRIPT ERRORS (if any):
<tsc output, or "none">

Return a verdict JSON: { "pass": boolean, "issues": [...] }
Output ONLY valid JSON.
```

The QA agent returns a verdict JSON.

**If `pass` is false and there are `severity: "error"` issues:**

Call the implement agent again with:
```
Fix the following issues in the <ComponentName> component:

CURRENT COMPONENT SPEC:
<ComponentSpec JSON>

QA ISSUES TO FIX:
<JSON array of error-severity issues>

Rewrite the affected files to fix these issues.
```

Re-run the QA agent after each fix attempt. Allow up to MAX_QA_RETRIES total fix attempts.

If errors persist after all retries: proceed with `STATUS: "needs-review"`.

---

### Step 6 — Update the manifest

Call the manifest agent with:
```
update
COMPONENT_NAME: <ComponentName>
SELECTORS_COVERED: <JSON array from ComponentSpec.selectorsCovered>
STATUS: <"done" or "needs-review">
SPEC_FILE: specs/<ComponentName>.json
STORY_FILE: src/stories/<ComponentName>.stories.tsx
```

---

### Step 7 — Commit the component

Stage and commit the new component files:

```bash
git add specs/<ComponentName>.json \
        src/components/<ComponentName>/ \
        src/stories/<ComponentName>.stories.tsx \
        selector-manifest.json
git commit -m "feat: add <ComponentName> component (<targetSelector>)"
```

If the commit fails (e.g. nothing staged, hook error), log a warning but do not stop the pipeline.

---

### Step 9 — Log the iteration

Append a JSON line to `logs/orchestrator.log`:
```json
{"timestamp":"<ISO timestamp>","selector":"<targetSelector>","componentName":"<name>","selectorsCovered":<N>,"qaPass":<true/false>,"status":"<done/needs-review/skipped>"}
```

---

### Step 10 — Loop

Track consecutive failures (iterations where the explore agent failed or QA could not be resolved). A successful iteration (status `done` or `needs-review`) resets the counter to 0. If 5 consecutive failures occur, stop and report: "5 consecutive failures — stopping pipeline. Check logs/orchestrator.log for details."

Otherwise, return to Step 1.

---

## Completion

When the loop ends naturally, print a summary:
```
Pipeline complete.
  Components built:   N
  Selectors covered:  N
  Needs review:       N
  Skipped:            N
```
