import type { Meta, StoryObj } from '@storybook/react';
import { CourseFull } from '../../components/molecules/CourseFull';

const meta: Meta<typeof CourseFull> = {
  title: 'Molecules/CourseFull',
  component: CourseFull,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CourseFull>;

export const Default: Story = {
  render: () => (
    <CourseFull>
      <p>
        This course is no longer taking applications for{' '}
        <span className="ug-course-full-year ugcoursebold">2026-27</span> entry. View{' '}
        <a href="/undergraduate/courses/2027/mechanical-engineering-meng">2027-28</a> entry or{' '}
        <a href="https://www.sheffield.ac.uk/undergraduate/courses">find another undergraduate course</a>.
      </p>
    </CourseFull>
  ),
};

export const CustomAlert: Story = {
  render: () => (
    <CourseFull>
      <p>
        <a className="uoslink" href="#apply">Apply now for 2026 entry</a> or{' '}
        <a className="uoslink" href="https://sheffield.ac.uk/postgraduate/visit/open-day">
          book a place on our online open day
        </a>{' '}
        on 29 April 2026 to see where a Sheffield masters could take you.
      </p>
    </CourseFull>
  ),
};
