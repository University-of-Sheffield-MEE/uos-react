import type { Meta, StoryObj } from '@storybook/react';
import { UgCourseRow } from '../../components/layouts/UgCourseRow';

const meta: Meta<typeof UgCourseRow> = {
  title: 'Layouts/UgCourseRow',
  component: UgCourseRow,
  tags: ['autodocs'],
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
