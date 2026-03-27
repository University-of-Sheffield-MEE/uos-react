import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '../../components/atoms/CloseButton';

const meta: Meta<typeof CloseButton> = {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A close/dismiss button for the off-canvas navigation menu, displaying a text label with a multiplication sign.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {
    label: 'Close menu ×',
    ariaLabel: 'Close menu',
  },
};
