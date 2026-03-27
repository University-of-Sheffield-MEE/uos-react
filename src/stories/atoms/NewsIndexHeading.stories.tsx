import type { Meta, StoryObj } from '@storybook/react';
import { NewsIndexHeading } from '../../components/atoms/NewsIndexHeading';

const meta: Meta<typeof NewsIndexHeading> = {
  title: 'Atoms/NewsIndexHeading',
  component: NewsIndexHeading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsIndexHeading>;

export const Default: Story = {
  args: {
    text: 'News stories',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Latest news',
  },
};
