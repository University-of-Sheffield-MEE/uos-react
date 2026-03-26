# UoS React — Autonomous AI Component Generation Experiment

> **This library is not intended for use.** The components it contains are generated artefacts produced as part of an experiment in autonomous AI-driven software development. They have not been reviewed for correctness, accessibility, or production suitability.

---

## What this is

This repository is an experiment in using autonomous AI agents — specifically Claude Code running inside a multi-agent pipeline — to generate a React component library from scratch, without human authorship of any component code.

The source material is an existing university website. The agents analyse its global CSS and live DOM to reverse-engineer every UI pattern into typed React components with Storybook stories, following atomic design principles throughout. The human role is limited to configuring the pipeline; the agents select components, inspect the DOM, write code, validate output, and update state entirely on their own.

The question the experiment asks is: **how far can a sufficiently structured agentic system get on a non-trivial, open-ended frontend engineering task before meaningful human intervention is required?**

## Generated components

The latest generated components live on the [`components-attempt-3`](https://github.com/University-of-Sheffield-MEE/uos-react/tree/components-attempt-3) branch. `main` contains only the pipeline tooling and agent configuration.

A Storybook instance built from that branch is deployed to GitHub Pages:

**[https://university-of-sheffield-mee.github.io/uos-react/](https://university-of-sheffield-mee.github.io/uos-react/)**

---

## How the pipeline works

Running `/build-components` starts an orchestrator that loops indefinitely through pending CSS selectors. For each iteration it dispatches four specialised sub-agents in sequence:

```
orchestrator (/build-components skill)
  │
  ├─► explore   — picks the next selector, fetches live DOM fragments,
  │               classifies the component type, and produces a ComponentSpec JSON
  │
  ├─► implement — reads the spec and writes the .tsx component,
  │               barrel export, and .stories.tsx file to disk
  │
  ├─► qa        — validates the written files against the spec
  │               and returns a structured pass/fail verdict
  │
  └─► manifest  — registers the completed component in the pipeline
                  state file and marks selectors done
```

Each agent is given only the tools and context it needs. The orchestrator itself never loads the manifest JSON or page HTML — all state access goes through a small CLI (`tools/manifest.js`) to keep context windows small across long runs.

---

## Atomic design

Components are classified into four tiers following Brad Frost's atomic design:

| Tier | Description | Examples |
|---|---|---|
| **Atom** | Self-contained UI primitive | button, badge, tag, input, icon |
| **Molecule** | Groups or composes atoms | card, teaser, breadcrumb, pagination |
| **Layout** | Structural wrapper, no intrinsic content | page grid, column, constrained container |
| **Organism** | Large section composing multiple molecules | header, footer, navigation, hero |

Atoms are always built before any molecule that depends on them. When the explore agent specifies a molecule and finds that a required child atom has not yet been built, it pivots automatically and specs the atom first.

---

## Component generation method

For each component the explore agent:

1. Fetches 8–15 real HTML fragments from live pages via `tools/get-examples.js`
2. Analyses structural variation across fragments to identify props (text that varies → string prop, class present in some samples → boolean toggle, absent child elements → optional render, freeform slot → `children: ReactNode`)
3. Produces a `ComponentSpec` JSON that records the root element, all CSS classes (including Drupal-generated classes preserved verbatim), props with their DOM mappings, subcomponent boundaries, and Storybook story definitions

The implement agent then writes code directly from the spec. The implement agent has no access to the live DOM — it works only from the spec, enforcing a clean separation between analysis and generation.

---

## Pipeline state

`selector-manifest.json` is the single source of truth for pipeline progress. It tracks every CSS selector found on three or more pages of the site, with statuses:

- `pending` — not yet processed
- `done` — implemented and registered
- `skipped` — confirmed utility class or otherwise out of scope
- `low-priority` — deprioritised but not skipped
- `needs-review` — flagged for human inspection

The `tools/manifest.js` CLI exposes subcommands for listing, searching, updating, and summarising this state. Agents call it as a subprocess rather than reading the JSON directly.

---

## Repository layout

```
selector-manifest.json        pipeline state
specs/                        ComponentSpec JSON files (one per component)
src/components/
  atoms/                      generated atom components
  molecules/                  generated molecule components
  layouts/                    generated layout components
  organisms/                  generated organism components
src/stories/                  generated Storybook stories (mirrors src/components/)
tools/
  index.json.gz               compressed page index built from a site crawl
  get-examples.js             fetches live DOM fragments for a selector
  init-manifest.js            one-time setup: builds selector-manifest.json from the index
  manifest.js                 CLI used by agents to read/write pipeline state
.claude/agents/               sub-agent system prompts (explore, implement, qa, manifest)
logs/orchestrator.log         one JSON line per completed pipeline iteration
```

---

## Tech stack

- **React 18** with the JSX transform (no `import React` needed)
- **TypeScript 5**
- **Storybook 8** (Vite-based, CSF3 stories)
- **Vite 5**

---

## Running Storybook locally

```bash
git checkout components-attempt-3
npm install
npm run storybook
```
