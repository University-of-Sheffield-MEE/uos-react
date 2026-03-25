import type { Meta, StoryObj } from '@storybook/react';
import { BackToTop } from '../../components/atoms/BackToTop';

const meta: Meta<typeof BackToTop> = {
  title: 'Atoms/BackToTop',
  component: BackToTop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {
  args: {
    ariaLabel: 'Scroll to top of page',
  },
};
