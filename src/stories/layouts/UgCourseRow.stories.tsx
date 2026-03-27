import type { Meta, StoryObj } from '@storybook/react';
import { UgCourseRow } from '../../components/layouts/UgCourseRow';

const meta: Meta<typeof UgCourseRow> = {
  title: 'Layouts/UgCourseRow',
  component: UgCourseRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Two-column layout wrapper for undergraduate course detail pages, with a sidebar navigation column (4 units wide) and a main content column (8 units wide).\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UgCourseRow>;

export const Default: Story = {
  render: () => (
    <UgCourseRow
      sidebar={
        <div style={{ background: '#f0f0f0', padding: '1rem' }}>
          Sidebar navigation
        </div>
      }
    >
      <div style={{ background: '#fafafa', padding: '1rem' }}>
        Main content area
      </div>
    </UgCourseRow>
  ),
};
