import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '../../components/atoms/SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Atoms/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {
    targetId: 'main-content',
    label: 'Skip to main content',
  },
};

export const CustomTarget: Story = {
  args: {
    targetId: 'page-content',
    label: 'Skip to page content',
  },
};
