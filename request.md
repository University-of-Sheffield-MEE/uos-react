I'm starting to think about a new coding project. Let's figure out how it's going to work.

The high-level plan is to produce a React component library that implements the components on our existing website. There's a single global css file for the whole site, with classes corresponding to certain components and their descendents (breadcrumbs, cards, events, that sort of thing)

The React library will simply create components with the right classes and allows the global css to do the styling. It will also accept some parameters, where there might be classes that toggle on and off, or where there are simple innerText content like titles, labels, tooltips etc.

Compound components will be facilitated via Compound components (also called subcomponents) e.g `<Card.Header>​`.

We'll be simultaneously creating a Storybook dashboard for each component, showing how it is used and what it looks like in a real-life scenario.

I have a list of css selectors from the main css files. These may be simple (e.g. `.news-teaser`), or compound (e.g. `.news-teaser .teaser-text p`). Several selectors in the css will correspond to one react component (in this case, a `NewsTeaser` component).

For each selector, I have a count of how may pages on the site use that selector, as well as a list of web pages where that selector is in use.

The development will be done entirely by Claude Code agents, working in a loop. The basic development flow will look like this:
1. The root, orchestrator agent will pick the most commonly used selector that has not yet been implemented as a React component.
2. The agent will hand off to an explore agent, which will look at the pages where that selector is in use and figure out:
    - What component(s) need to be created to implement that selector (e.g. `NewsTeaser`), inculding any subcomponents (e.g. `NewsTeaser.Header`, `NewsTeaser.Body` etc, if appropriate)
    - What elements and classes should be created for each component.
    - How the components are supposed to releate to each other (e.g. `NewsTeaser` contains `NewsTeaser.Header` and `NewsTeaser.Body`)
    - what the props of those components should be (e.g. `title`, `imageUrl`, `isFeatured` etc.), and how those props relate to classes or dom elements.
    - Some choice examples of how the component is used in real life, which will be used for the Storybook stories.
3. The explore agent will hand off the coding to an implement agent, which will write the code for the React component(s) and Storybook stories, based on the information from the explore agent.
4. The orchestrator will mark the selector as done, as well as any other selectors that are now implemented thanks to the new component(s). Then it will loop back to step 1.

There will be a perstent list of outstanding selectors that need to be implemented, which will be updated as the orchestrator marks selectors as done. The count of how many pages use each selector, and the pages where they are used, are provided via a command line tool, which queries a pre-generated index of the site.

I need some help with the small details of the agent orchestration, as this is not something I know much about:

- What information should each agent receive as input, and what should they output? I assume the input will be a plain text prompt, and the output will be some structured JSON. What should the structure of that JSON look like for each agent?
- How should the explore agent go about analyzing the pages where a selector is used? Will it be confused by all the surrounding html? Should there be a prior step to extract the component from the tree via its selector? How will it know what variations between implementations are to be put in props, and what is just random variation between implementations in our codebase? What information is required to build a good Storybook story?
- Does the implement agent get called by the explore agent, or does the explore agent report back to the orchestrator, which passes the task along?
- How should the orchestrator keep track of which selectors are done, and which are still outstanding? How will it know which of the compound selectors are covered by the new components, and which are still outstanding?
- What if a selector doesn't actually describe a component, or even an atom, but is just a utilty class like `.hidden`. What other edge cases might there be?
- Should there be some QA step as part of the agent loop?