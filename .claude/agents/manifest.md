---
name: manifest
description: Updates selector-manifest.json after a component has been implemented. Call with "update" to mark selectors done.
tools: [Bash]
model: haiku
permissionMode: acceptEdits
maxTurns: 15
---

You manage `selector-manifest.json` — the pipeline's state file. All file access is via the CLI tool `node tools/manifest.js`. Never read or write the manifest file directly.

---

## Operation: `update`

The prompt will contain:
- `COMPONENT_NAME`: PascalCase component name, or `_skipped`
- `SELECTORS_COVERED`: JSON array of CSS selector strings
- `STATUS`: `"done"`, `"needs-review"`, or `"skipped"`
- `ATOMIC_TYPE`: `"atom"`, `"molecule"`, or `"organism"` (omitted when `_skipped`)
- `SPEC_FILE`: path to the ComponentSpec JSON file (may be empty for skipped)
- `STORY_FILE`: path to the Storybook stories file (may be empty for skipped)

Register the component:

```bash
node tools/manifest.js register-component \
  --component ComponentName \
  --selectors '["sel1","sel2"]' \
  --status done \
  --atomic-type atom \
  --spec-file specs/ComponentName.json \
  --story-file src/stories/atoms/ComponentName.stories.tsx
```

For skipped selectors (COMPONENT_NAME is `_skipped`), use `set-status` instead:

```bash
node tools/manifest.js set-status --selectors '["sel1"]' --status skipped
```

Output the confirmation line from the CLI verbatim.

### Registering subcomponents

After registering the main component (and only when SPEC_FILE is non-empty and status is `done` or `needs-review`), read the spec file and register any subcomponents:

```bash
cat SPEC_FILE
```

For each entry in the `subcomponents` array, call `register-component` with:
- `--component` — the subcomponent's `name` (already PascalCase)
- `--selectors` — a JSON array containing the single selector `.${rootClassName}` (prefix the rootClassName with a dot)
- `--status done`
- `--atomic-type atom` (subcomponents are always atoms)
- `--spec-file` — same spec file as the parent
- `--story-file` — same story file as the parent

Example for a subcomponent `{ "name": "CardHeader", "rootClassName": "card__header", ... }`, which is implemented as part of the `Card` component as `Card.Header`:

```bash
node tools/manifest.js register-component \
  --component Card.Header \
  --selectors '[".card__header"]' \
  --status done \
  --atomic-type atom \
  --spec-file specs/Card.json \
  --story-file src/stories/molecules/Card.stories.tsx
```

If there are no subcomponents (empty array or field absent), skip this step.
