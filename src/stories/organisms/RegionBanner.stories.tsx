import type { Meta, StoryObj } from '@storybook/react';
import { RegionBanner } from '../../components/organisms/RegionBanner';

const meta: Meta<typeof RegionBanner> = {
  title: 'Organisms/RegionBanner',
  component: RegionBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegionBanner>;

export const Default: Story = {
  args: {
    sectionLabel: 'Management School',
    sectionHref: '/management',
    items: [
      {
        label: 'About',
        children: [
          {
            label: 'About us',
            href: '/management/about',
            children: [
              { label: 'Accreditations', href: '/management/about/accreditations' },
              { label: 'Trading Room', href: '/management/about/facilities' },
              { label: 'News', href: '/management/news' },
              { label: 'Getting here', href: '/management/about/getting-here' },
              { label: 'Contact us', href: '/management/contact' },
            ],
          },
          {
            label: "The Dean's List",
            href: '/management/deans-list',
            children: [
              { label: "About the Dean's List", href: '/management/deans-list/about-deans-list' },
              { label: 'Winners', href: '/management/deans-list/winners' },
            ],
          },
          {
            label: 'People',
            href: '/management/people',
          },
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
              { label: 'Accreditations', href: '/management/about/accreditations' },
            ],
          },
        ],
      },
      {
        label: 'Research',
        children: [
          {
            label: 'Research',
            href: '/management/research',
            children: [
              { label: 'Research themes', href: '/management/research/research-themes' },
              {
                label: 'Research impact and knowledge exchange',
                href: '/management/research/research-impact-and-knowledge-exchange',
              },
            ],
          },
          {
            label: 'PhD study',
            href: '/management/phd',
            children: [
              { label: 'How to apply', href: '/management/phd/apply' },
              { label: 'PhD scholarships', href: '/management/phd/phd-scholarships' },
            ],
          },
        ],
      },
    ],
  },
};
