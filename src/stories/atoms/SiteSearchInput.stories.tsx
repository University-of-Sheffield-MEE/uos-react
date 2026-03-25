import type { Meta, StoryObj } from '@storybook/react';
import { SiteSearchInput } from '../../components/atoms/SiteSearchInput';

const meta: Meta<typeof SiteSearchInput> = {
  title: 'Atoms/SiteSearchInput',
  component: SiteSearchInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteSearchInput>;

export const Default: Story = {
  args: {
    id: 'site-search-box',
    name: 'query',
    placeholder: 'Search our site',
    ariaLabel: 'Search our site',
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    id: 'site-search-box',
    name: 'query',
    placeholder: 'Search our site',
    ariaLabel: 'Search our site',
    value: 'computer science',
    required: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    id: 'staff-search-box',
    name: 'query',
    placeholder: 'Search staff profiles',
    ariaLabel: 'Search staff profiles',
    required: false,
  },
};
