import type { Meta, StoryObj } from '@storybook/react';
import { CourseEreqTabs } from '../../components/molecules/CourseEreqTabs';

const meta: Meta<typeof CourseEreqTabs> = {
  title: 'Molecules/CourseEreqTabs',
  component: CourseEreqTabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tab list for switching between Standard and Access Sheffield entry requirement panels on undergraduate course pages.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
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
