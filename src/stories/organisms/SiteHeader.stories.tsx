import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from '../../components/organisms/SiteHeader';

const meta: Meta<typeof SiteHeader> = {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    logoHref: '/?home',
    logoSrc: 'https://sheffield.ac.uk/themes/custom/uos_public/images/logos/uos-crest.svg',
    logoSrcDesktop: 'https://sheffield.ac.uk/themes/custom/uos_public/images/logos/uos-crest.svg',
    logoAlt: 'University of Sheffield homepage',
    navItems: [
      {
        label: 'Study',
        groups: [
          {
            heading: { label: 'Courses', href: '/courses' },
            links: [
              { label: 'Undergraduate courses', href: '/undergraduate/home' },
              { label: 'Postgraduate taught courses', href: '/postgraduate/taught' },
              { label: 'PhD study', href: '/postgraduate/phd' },
              { label: 'Apprenticeships', href: '/apprenticeships' },
            ],
          },
          {
            heading: { label: 'Studying at Sheffield', href: '/study/home' },
            links: [
              { label: 'Teaching', href: '/study/teaching' },
              { label: 'Facilities', href: '/study/facilities' },
              { label: 'Your career prospects', href: '/study/career' },
            ],
          },
          {
            heading: { label: 'Student life', href: '/study/home', featured: true },
            links: [
              { label: "Students' Union - the UK's no. 1", href: '/study/su' },
              { label: 'Clubs, societies and sport', href: '/study/clubs-societies-sport' },
              { label: 'Guide to Sheffield', href: '/sheffield-guide/home' },
            ],
          },
        ],
      },
      {
        label: 'Research',
        groups: [
          {
            heading: { label: 'Research at Sheffield', href: '/research/home' },
            links: [
              { label: 'Our strategic priorities', href: '/vision/our-pillars/research' },
              { label: 'Our people', href: '/research/people' },
              { label: 'Open Research', href: '/openresearch/home' },
            ],
          },
          {
            heading: { label: 'Postgraduate research', href: '/postgraduate/phd' },
            links: [
              { label: 'Find a PhD', href: '/postgraduate/phd/search' },
              { label: 'PhD projects directory', href: '/postgraduate/phd/projects' },
              { label: 'PhD scholarships', href: '/postgraduate/phd/scholarships' },
            ],
          },
        ],
      },
      {
        label: 'About',
        groups: [
          {
            heading: { label: 'About the University', href: '/about/home' },
            links: [
              { label: 'News', href: '/news' },
              { label: 'Events', href: '/whatson/home' },
              { label: 'Jobs', href: '/jobs/home' },
              { label: 'Sustainability at Sheffield', href: '/sustainability/home' },
            ],
          },
          {
            heading: { label: 'Schools, departments and services', href: '/departments' },
            links: [
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

export const MicrositeLogo: Story = {
  args: {
    logoHref: '/management?home',
    logoSrc: 'https://sheffield.ac.uk/themes/custom/uos_public/images/mgmt/tuosmgmt.png',
    logoAlt: 'University of Sheffield Management School homepage',
    logoClassName: 'logo mgmt-logo',
    navItems: [
      {
        label: 'Study',
        groups: [
          {
            heading: { label: 'Courses', href: '/courses' },
            links: [
              { label: 'Undergraduate courses', href: '/undergraduate/home' },
              { label: 'Postgraduate taught courses', href: '/postgraduate/taught' },
              { label: 'PhD study', href: '/postgraduate/phd' },
            ],
          },
        ],
      },
      {
        label: 'Research',
        groups: [
          {
            heading: { label: 'Research at Sheffield', href: '/research/home' },
            links: [
              { label: 'Our people', href: '/research/people' },
            ],
          },
        ],
      },
    ],
  },
};
