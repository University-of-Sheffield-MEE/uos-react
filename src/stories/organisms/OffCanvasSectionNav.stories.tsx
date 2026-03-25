import type { Meta, StoryObj } from '@storybook/react';
import { OffCanvasSectionNav } from '../../components/organisms/OffCanvasSectionNav';

const meta: Meta<typeof OffCanvasSectionNav> = {
  title: 'Organisms/OffCanvasSectionNav',
  component: OffCanvasSectionNav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OffCanvasSectionNav>;

export const Default: Story = {
  args: {
    sectionTitle: 'Management School',
    sectionHref: '/management',
    items: [
      {
        label: 'About',
        children: [
          {
            label: 'About the school',
            href: '/management/about',
            children: [
              { label: 'Accreditations', href: '/management/about/accreditations' },
              { label: 'Getting here', href: '/management/about/getting-here' },
              { label: 'Contact us', href: '/management/contact' },
            ],
          },
          { label: "The Dean's List", href: '/management/deans-list' },
          { label: 'People', href: '/management/people' },
        ],
      },
      {
        label: 'Undergraduate',
        children: [
          {
            label: 'Undergraduate study',
            href: '/management/undergraduate',
            children: [
              { label: 'Our courses', href: '/management/undergraduate/courses' },
              { label: 'Scholarships and fees', href: '/undergraduate/fees-funding' },
            ],
          },
        ],
      },
      {
        label: 'Postgraduate',
        children: [
          { label: 'Postgraduate study', href: '/management/postgraduate' },
          { label: 'PhD study', href: '/management/phd' },
        ],
      },
      {
        label: 'Research',
        children: [
          { label: 'Research', href: '/management/research' },
          { label: 'PhD study', href: '/management/phd' },
        ],
      },
    ],
  },
};

export const Support: Story = {
  args: {
    sectionTitle: 'Support for new students',
    sectionHref: '/new-students',
    items: [
      {
        label: 'Before you arrive',
        children: [
          {
            label: 'Before you arrive',
            href: '/new-students/before',
            children: [
              { label: 'Home undergraduate student checklist', href: '/new-students/ug-checklist' },
              { label: 'International undergraduate checklist', href: '/new-students/international-welcome' },
            ],
          },
        ],
      },
      {
        label: 'Welcome & life at Sheffield',
        children: [
          { label: 'Welcome & life at Sheffield', href: '/new-students/welcome' },
          { label: 'Events', href: 'https://students.sheffield.ac.uk/student-life' },
        ],
      },
      {
        label: 'News',
        href: '/student-visas-immigration/news',
      },
    ],
  },
};
