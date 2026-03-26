import type { Meta, StoryObj } from '@storybook/react';
import { UgCourseSearch } from '../../components/molecules/UgCourseSearch';

const meta: Meta<typeof UgCourseSearch> = {
  title: 'Molecules/UgCourseSearch',
  component: UgCourseSearch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UgCourseSearch>;

export const Default: Story = {
  render: (args) => <main id="main"><UgCourseSearch {...args} /></main>,
  args: {
    similarCoursesHref: '/courses/subjects/computer-science',
    similarCoursesLabel: 'Similar courses you might be interested in',
    azLinks: [
      { label: '2027-28 A-Z', href: '/undergraduate/courses/2027' },
      { label: '2026-27 A-Z', href: '/undergraduate/courses/2026' },
    ],
  },
};

export const DifferentSubject: Story = {
  render: (args) => <main id="main"><UgCourseSearch {...args} /></main>,
  args: {
    similarCoursesHref: '/courses/subjects/chemistry',
    similarCoursesLabel: 'Similar courses you might be interested in',
    azLinks: [
      { label: '2027-28 A-Z', href: '/undergraduate/courses/2027' },
      { label: '2026-27 A-Z', href: '/undergraduate/courses/2026' },
    ],
  },
};
