import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '../../components/atoms/CloseButton';

const meta: Meta<typeof CloseButton> = {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {
    label: 'Close menu ×',
    ariaLabel: 'Close menu',
  },
};
