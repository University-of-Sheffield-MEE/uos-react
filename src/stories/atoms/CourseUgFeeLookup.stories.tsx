import type { Meta, StoryObj } from '@storybook/react';
import { CourseUgFeeLookup } from '../../components/atoms/CourseUgFeeLookup';

const meta: Meta<typeof CourseUgFeeLookup> = {
  title: 'Atoms/CourseUgFeeLookup',
  component: CourseUgFeeLookup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A JavaScript widget mount point that dynamically renders undergraduate course fee information based on the course internal code and start year.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CourseUgFeeLookup>;

export const Default: Story = {
  args: {
    courseInternalCode: 'CMBU006',
    startYear: 2026,
  },
};

export const Year2027: Story = {
  args: {
    courseInternalCode: 'HPHU004',
    startYear: 2027,
  },
};
