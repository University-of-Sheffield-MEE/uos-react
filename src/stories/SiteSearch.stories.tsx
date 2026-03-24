import type { Meta, StoryObj } from '@storybook/react';
import { SiteSearch } from '../components/SiteSearch';

const meta: Meta<typeof SiteSearch> = {
  title: 'Components/SiteSearch',
  component: SiteSearch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteSearch>;

export const Default: Story = {};
