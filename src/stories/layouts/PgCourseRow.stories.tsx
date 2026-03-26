import type { Meta, StoryObj } from '@storybook/react';
import { PgCourseRow } from '../../components/layouts/PgCourseRow';

const meta: Meta<typeof PgCourseRow> = {
  title: 'Layouts/PgCourseRow',
  component: PgCourseRow,
  tags: ['autodocs'],
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
