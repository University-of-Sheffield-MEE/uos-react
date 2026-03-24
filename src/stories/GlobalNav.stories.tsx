import type { Meta, StoryObj } from '@storybook/react';
import { GlobalNav } from '../components/GlobalNav';

const meta: Meta<typeof GlobalNav> = {
  title: 'Components/GlobalNav',
  component: GlobalNav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GlobalNav>;

export const Default: Story = {};
