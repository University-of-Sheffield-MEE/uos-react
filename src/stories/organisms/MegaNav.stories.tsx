import type { Meta, StoryObj } from '@storybook/react';
import { MegaNav } from '../../components/organisms/MegaNav';

const meta: Meta<typeof MegaNav> = {
  title: 'Organisms/MegaNav',
  component: MegaNav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MegaNav>;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Study',
        children: [
          {
            label: 'Courses',
            href: '/courses',
            children: [
              { label: 'Undergraduate courses', href: '/undergraduate/home' },
              { label: 'Postgraduate taught courses', href: '/postgraduate/taught' },
              { label: 'PhD study', href: '/postgraduate/phd' },
            ],
          },
          {
            label: 'Studying at Sheffield',
            href: '/study/home',
            children: [
              { label: 'Teaching', href: '/study/teaching' },
              { label: 'Facilities', href: '/study/facilities' },
              { label: 'Your career prospects', href: '/study/career' },
            ],
          },
          {
            label: 'Student life',
            href: '/study/home',
            isUosLink: true,
            children: [
              { label: "Students' Union", href: '/study/su' },
              { label: 'Clubs, societies and sport', href: '/study/clubs-societies-sport' },
              { label: 'Guide to Sheffield', href: '/sheffield-guide/home' },
            ],
          },
        ],
      },
      {
        label: 'Research',
        children: [
          {
            label: 'Research at Sheffield',
            href: '/research/home',
            children: [
              { label: 'Our strategic priorities', href: '/vision/our-pillars/research' },
              { label: 'Our people', href: '/research/people' },
              { label: 'Open Research', href: '/openresearch/home' },
            ],
          },
          {
            label: 'Postgraduate research',
            href: '/postgraduate/phd',
            children: [
              { label: 'Find a PhD', href: '/postgraduate/phd/search' },
              { label: 'PhD projects directory', href: '/postgraduate/phd/projects' },
              { label: 'PhD scholarships', href: '/postgraduate/phd/scholarships' },
            ],
          },
        ],
      },
      {
        label: 'About',
        children: [
          {
            label: 'About the University',
            href: '/about/home',
            children: [
              { label: 'News', href: '/news' },
              { label: 'Events', href: '/whatson/home' },
              { label: 'Jobs', href: '/jobs/home' },
              { label: 'Rankings', href: '/about/rankings' },
            ],
          },
          {
            label: 'Schools, departments and services',
            href: '/departments',
            children: [
              { label: 'Schools', href: '/departments/academic' },
              { label: 'Faculties', href: '/departments/faculties' },
              { label: 'Professional services', href: '/departments/professional-services' },
            ],
          },
        ],
      },
    ],
  },
};

export const SingleSection: Story = {
  args: {
    items: [
      {
        label: 'Study',
        children: [
          {
            label: 'Courses',
            href: '/courses',
            children: [
              { label: 'Undergraduate courses', href: '/undergraduate/home' },
              { label: 'Postgraduate taught courses', href: '/postgraduate/taught' },
            ],
          },
          {
            label: 'Fees and funding',
            children: [
              { label: 'Undergraduate fees and funding', href: '/undergraduate/fees-funding' },
              { label: 'Postgraduate taught fees', href: '/postgraduate/taught/fees' },
            ],
          },
        ],
      },
    ],
  },
};
