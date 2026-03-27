import type { Meta, StoryObj } from '@storybook/react';
import { UgCourseBold } from '../../components/atoms/UgCourseBold';

const meta: Meta<typeof UgCourseBold> = {
  title: 'Atoms/UgCourseBold',
  component: UgCourseBold,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled inline span displaying the full undergraduate course year range (e.g. 2026-27) within a course listing context.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/mechanical-engineering-meng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UgCourseBold>;

export const Default: Story = {
  args: {
    year: '2026-27',
  },
};

export const NextYear: Story = {
  args: {
    year: '2027-28',
  },
};
