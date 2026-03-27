import type { Meta, StoryObj } from '@storybook/react';
import { BackToTop } from '../../components/atoms/BackToTop';

const meta: Meta<typeof BackToTop> = {
  title: 'Atoms/BackToTop',
  component: BackToTop,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A button that scrolls the user back to the top of the page, displayed as an icon button with an upward chevron.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {
  args: {
    ariaLabel: 'Scroll to top of page',
  },
};
