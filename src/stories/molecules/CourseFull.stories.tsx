import type { Meta, StoryObj } from '@storybook/react';
import { CourseFull } from '../../components/molecules/CourseFull';

const meta: Meta<typeof CourseFull> = {
  title: 'Molecules/CourseFull',
  component: CourseFull,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An info notice banner shown on course pages featuring a leading info icon and variable body content such as a course-full message or custom alert.\n\n[Example page](https://sheffield.ac.uk/postgraduate/taught/courses/2026/human-bioarchaeology-and-osteology-msc)',
      },
    },
  },
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
