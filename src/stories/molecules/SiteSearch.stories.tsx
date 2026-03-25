import type { Meta, StoryObj } from '@storybook/react';
import { SiteSearch } from '../../components/molecules/SiteSearch';

const meta: Meta<typeof SiteSearch> = {
  title: 'Molecules/SiteSearch',
  component: SiteSearch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteSearch>;

export const Default: Story = {
  args: {
    action: '/find',
    inputName: 'query',
    placeholder: 'Search our site',
    toggleAriaLabel: 'Open site search dropdown',
  },
};

export const CustomAction: Story = {
  args: {
    action: '/search',
    inputName: 'q',
    placeholder: 'Search our site',
    toggleAriaLabel: 'Open site search dropdown',
  },
};
