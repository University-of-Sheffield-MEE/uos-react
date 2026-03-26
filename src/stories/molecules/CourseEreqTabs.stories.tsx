import type { Meta, StoryObj } from '@storybook/react';
import { CourseEreqTabs } from '../../components/molecules/CourseEreqTabs';

const meta: Meta<typeof CourseEreqTabs> = {
  title: 'Molecules/CourseEreqTabs',
  component: CourseEreqTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CourseEreqTabs>;

export const Default: Story = {
  args: {
    activeTab: 'standard',
  },
};

export const AccessSheffieldActive: Story = {
  args: {
    activeTab: 'access_sheffield',
  },
};
