import type { Meta, StoryObj } from '@storybook/react';
import { Muse } from '../components/Muse';

const meta: Meta<typeof Muse> = {
  title: 'Components/Muse',
  component: Muse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Muse>;

export const Default: Story = {
  args: {
    searchAction: '/find',
    searchQueryParam: 'query',
  },
};
