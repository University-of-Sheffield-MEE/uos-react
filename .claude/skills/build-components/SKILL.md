---
name: build-components
description: Build pipeline that loops through pending CSS selectors in selector-manifest.json and implements each as a React component. Invokes the explore, implement, QA, and manifest sub-agents in sequence. Commits each component to git on success.
disable-model-invocation: true
---

You are running the UoS React component library build pipeline. Your job is to loop through the pending CSS selectors in `selector-manifest.json`, implement each one as a React component, and update the manifest as you go.

## Usage

```
/build-components                    — auto-selects the next pending selector
/build-components <target>           — targets a specific component or selector
```

`<target>` can be:
- A CSS selector:   `.news-teaser`
- Free-form text:   `"the breadcrumb navigation"`
- A long description of what is to be built

When a target is provided, pass all relevant information from the target to the explore agent. The agent resolves the selector, gathers DOM samples, and produces a spec for that component. Complete the rest of the pipeline as normal, and then terminate after that component is comitted. Only loop when no target is provided.

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
   mkdir -p src/components/atoms src/components/molecules src/components/organisms \
            src/stories/atoms src/stories/molecules src/stories/organisms \
            specs logs
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

Repeat until the explore agent reports no more pending selectors.

---

### Step 1 — Call the explore agent

The explore agent handles both selector selection and DOM analysis in a single pass.

**First iteration only:** If the user provided a `<target>` when invoking this skill, call the explore agent with:

```
Fetch DOM samples and produce a ComponentSpec JSON for: <TARGET>
Output ONLY a valid ComponentSpec JSON object. No explanation, no markdown fences.
```

**All other iterations (or no target was specified):** call it with:

```
Fetch DOM samples and produce a ComponentSpec JSON for the next pending selector.
Output ONLY a valid ComponentSpec JSON object. No explanation, no markdown fences.
```

The explore agent self-loads the candidate list and available components via the manifest CLI, selects the best candidate, optionally pivots to spec a missing dependency atom first, and returns a ComponentSpec JSON.

**Validate the returned JSON:**
- Must have: `componentName`, `atomicType`, `rootClassName`, `selectorsCovered`, `props`, `stories`
- `componentName` must be PascalCase (or null for utility/no-match/all-done)
- `atomicType` must be `"atom"`, `"molecule"`, or `"organism"`
- `selectorsCovered` must be a non-empty array of strings starting with `.`
- `stories` must have at least one entry
- `htmlExamples` should have at least one entry

If validation fails, retry the explore agent once with: `"Your previous response was not valid JSON or was missing required fields. Try again."`

If it fails again, or if `componentName` is null with `notes: "all-pending-selectors-processed"`, stop the loop and print the completion message.

If `componentName` is null for any other reason (utility or no-match), the explore agent will have already handled the skipping — proceed to Step 9 to log, then loop.

**Check for component name conflicts:** If `componentName` already appears in the manifest's `components` map, append `2` to the name (e.g. `NewsTeaser2`), then check again; increment until the name is unique. Update the `componentName` field inside the spec JSON object to match.

**Determine `atomicSubdir`** from `spec.atomicType`: `atom` → `atoms`, `molecule` → `molecules`, `organism` → `organisms`.

**Save the spec:** Write the (possibly updated) ComponentSpec JSON to `specs/<ComponentName>.json`.

---

### Step 2 — Call the implement agent

Call the implement agent with this prompt:

```
Implement the following React component.

SPEC_FILE: specs/<ComponentName>.json
ATOMIC TYPE: <spec.atomicType>

FILE CONVENTIONS:
- Component: src/components/<atomicSubdir>/<ComponentName>/<ComponentName>.tsx
- Index:     src/components/<atomicSubdir>/<ComponentName>/index.ts
- Stories:   src/stories/<atomicSubdir>/<ComponentName>.stories.tsx
- TypeScript strict mode, react-jsx transform (no React import needed)
- Plain className strings (no CSS modules, no className libraries)
- Storybook 8 CSF3 format with Meta and StoryObj types
- Story title: "<AtomicPrefix>/<ComponentName>" (Atoms/, Molecules/, or Organisms/)

Read the spec file first, then write all three files.
```

After the agent returns, verify the files exist:
- `src/components/<atomicSubdir>/<ComponentName>/<ComponentName>.tsx`
- `src/components/<atomicSubdir>/<ComponentName>/index.ts`
- `src/stories/<atomicSubdir>/<ComponentName>.stories.tsx`

Use `ls` to check. If any are missing, call the implement agent again with the full prompt, appending: `"Note: these files were not created on the previous attempt and must be written now: <list>."` Allow up to MAX_IMPLEMENT_RETRIES retries.

---

### Step 3 — TypeScript check

```bash
npx tsc --noEmit 2>&1
```

Note any errors. Pass them to the QA agent as context. Only consider errors that reference files inside `src/components/<atomicSubdir>/<ComponentName>/` or `src/stories/<atomicSubdir>/<ComponentName>.stories.tsx` — errors in other components are pre-existing.

---

### Step 4 — Call the QA agent

```
QA TASK: Validate the following React component against its spec.

SPEC_FILE: specs/<ComponentName>.json
COMPONENT_FILE: src/components/<atomicSubdir>/<ComponentName>/<ComponentName>.tsx
INDEX_FILE: src/components/<atomicSubdir>/<ComponentName>/index.ts
STORIES_FILE: src/stories/<atomicSubdir>/<ComponentName>.stories.tsx

TYPESCRIPT ERRORS (if any):
<tsc output, or "none">

Read all four files from disk, then return a verdict JSON: { "pass": boolean, "issues": [...] }
Output ONLY valid JSON.
```

The QA agent returns a verdict JSON.

**If `pass` is false and there are `severity: "error"` issues:**

Call the implement agent again with:
```
Fix the following issues in the <ComponentName> component:

SPEC_FILE: specs/<ComponentName>.json
ATOMIC TYPE: <spec.atomicType>

QA ISSUES TO FIX:
<JSON array of error-severity issues>

Read the spec file and the existing component files, apply only the targeted fixes, then rewrite the affected files.
```

Re-run the QA agent after each fix attempt. Allow up to MAX_QA_RETRIES total fix attempts.

If errors persist after all retries: proceed with `STATUS: "needs-review"`.

---

### Step 5 — Update the manifest

Call the manifest agent with:
```
update
COMPONENT_NAME: <ComponentName>
SELECTORS_COVERED: <JSON array from ComponentSpec.selectorsCovered>
STATUS: <"done" or "needs-review">
ATOMIC_TYPE: <spec.atomicType>
SPEC_FILE: specs/<ComponentName>.json
STORY_FILE: src/stories/<atomicSubdir>/<ComponentName>.stories.tsx
```

---

### Step 6 — Commit the component

Stage and commit the new component files:

```bash
git add specs/<ComponentName>.json \
        src/components/<atomicSubdir>/<ComponentName>/ \
        src/stories/<atomicSubdir>/<ComponentName>.stories.tsx \
        selector-manifest.json
git commit -m "feat(<atomicType>): add <ComponentName> component (<targetSelector>)"
```

If the commit fails (e.g. nothing staged, hook error), log a warning but do not stop the pipeline.

---

### Step 7 — Log the iteration

Append a JSON line to `logs/orchestrator.log`:
```json
{"timestamp":"<ISO timestamp>","selector":"<targetSelector>","componentName":"<name>","atomicType":"<atom|molecule|organism>","selectorsCovered":<N>,"qaPass":<true/false>,"status":"<done/needs-review/skipped>"}
```

---

### Step 8 — Loop

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
