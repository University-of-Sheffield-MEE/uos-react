import type { Meta, StoryObj } from '@storybook/react';
import { QuickLinks } from '../../components/molecules/QuickLinks';

const meta: Meta<typeof QuickLinks> = {
  title: 'Molecules/QuickLinks',
  component: QuickLinks,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A section containing a grid of related page links, optionally preceded by a heading, arranged in a 3-column multicol layout.\n\n[Example page](https://sheffield.ac.uk/alumni/boardroom-masterclass/speakers-2021)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickLinks>;

export const Default: Story = {
  args: {
    heading: 'Links',
    links: [
      { label: 'Boardroom home', href: '/alumni/boardroom-masterclass', title: 'Boardroom home' },
      { label: 'Watch the 2020 series', href: '/alumni/boardroom-masterclass/speakers-2020', title: 'Watch the 2020 series of Boardroom masterclasses' },
      { label: 'Watch the 2022 series', href: '/alumni/boardroom-masterclass/boardroom-meet-speakers-2022-0', title: 'Watch the 2022 series of Boardroom masterclasses' },
    ],
  },
};

export const NoHeading: Story = {
  args: {
    links: [
      { label: 'School of Geography and Planning alumni', href: '/geography-planning/school/alumni', title: 'School of Geography and Planning alumni' },
      { label: 'Geography green impact', href: '/geography-planning/school/green-impact', title: 'Geography green impact' },
    ],
  },
};

export const CustomHeading: Story = {
  args: {
    heading: 'Find out more',
    links: [
      { label: 'Research pillars', href: '/neuroscience-institute/research', title: 'Research pillars' },
      { label: 'News', href: 'https://www.sheffield.ac.uk/neuroscience-institute/news', title: 'News' },
    ],
  },
};

export const ManyLinks: Story = {
  args: {
    heading: 'Supplementary',
    links: [
      { label: 'Support the University', href: '/giving/home', title: 'Support the University' },
      { label: 'Alumni volunteering', href: '/alumni/volunteer', title: 'Alumni volunteering' },
      { label: 'Alumni benefits', href: '/alumni/benefits', title: 'Alumni benefits' },
      { label: 'Magazines and newsletters', href: '/alumni/communications', title: 'Magazines and newsletters' },
      { label: 'Update your contact details', href: '/alumni/update', title: 'Update your contact details' },
      { label: 'Upcoming events', href: '/alumni/events', title: 'Upcoming events' },
    ],
  },
};
