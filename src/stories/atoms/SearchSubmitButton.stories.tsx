import type { Meta, StoryObj } from '@storybook/react';
import { SearchSubmitButton } from '../../components/atoms/SearchSubmitButton';

const meta: Meta<typeof SearchSubmitButton> = {
  title: 'Atoms/SearchSubmitButton',
  component: SearchSubmitButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchSubmitButton>;

export const Default: Story = {
  args: {
    ariaLabel: 'Site search',
  },
};

export const CustomAriaLabel: Story = {
  args: {
    ariaLabel: 'Submit search',
  },
};
