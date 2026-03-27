import type { Meta, StoryObj } from '@storybook/react';
import { SearchSubmitButton } from '../../components/atoms/SearchSubmitButton';

const meta: Meta<typeof SearchSubmitButton> = {
  title: 'Atoms/SearchSubmitButton',
  component: SearchSubmitButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A submit button for the site search form containing a Font Awesome search icon, used inside the .site-search form.',
      },
    },
  },
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
