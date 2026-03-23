import type { Preview } from "@storybook/react";

// TODO: Add the global CSS import once the path is known:
// import '../path/to/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
