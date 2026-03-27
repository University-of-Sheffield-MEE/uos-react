import type { Meta, StoryObj } from '@storybook/react';
import { UgCourseSearch } from '../../components/molecules/UgCourseSearch';

const meta: Meta<typeof UgCourseSearch> = {
  title: 'Molecules/UgCourseSearch',
  component: UgCourseSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Undergraduate course search widget displayed in the course page footer area, with a keyword input, search button, similar-courses link, and A-Z listing links.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
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
