import type { Meta, StoryObj } from '@storybook/react';
import { PgCourseRow } from '../../components/layouts/PgCourseRow';

const meta: Meta<typeof PgCourseRow> = {
  title: 'Layouts/PgCourseRow',
  component: PgCourseRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Two-column layout wrapper for postgraduate course detail pages, with a sidebar navigation column (4 units wide) and a main content column (8 units wide).\n\n[Example page](https://sheffield.ac.uk/postgraduate/taught/courses/2026/human-bioarchaeology-and-osteology-msc)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PgCourseRow>;

export const Default: Story = {
  render: () => (
    <PgCourseRow sidebar="Sidebar navigation content">
      Main course content
    </PgCourseRow>
  ),
};
