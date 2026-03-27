import type { Meta, StoryObj } from '@storybook/react';
import { ParaPromotion } from '../../components/molecules/ParaPromotion';

const meta: Meta<typeof ParaPromotion> = {
  title: 'Molecules/ParaPromotion',
  component: ParaPromotion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A promotional callout block with a heading, optional body text, optional image, and one or more call-to-action links; typically rendered as a blue-bar sidebar aside or an image-led promotion panel.\n\n[Example page](https://sheffield.ac.uk/library/news/showcasing-white-rose-university-press-quality-and-innovation-open-access-publishing)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ParaPromotion>;

export const Default: Story = {
  args: {
    heading: 'Find a PhD',
    body: 'Search for PhD opportunities at Sheffield and be part of our world-leading research.',
    links: [{ label: 'Find a project or supervisor', href: '/postgraduate/phd/search' }],
    blueBar: true,
  },
};

export const MultipleLinks: Story = {
  args: {
    heading: 'Ask us a question',
    links: [
      { label: 'Start a live chat', href: 'https://libraryhelp.shef.ac.uk/chat/widget/16f6eaa078105b4007390a061b9702b4' },
      { label: 'Email library@sheffield.ac.uk', href: 'mailto:library@sheffield.ac.uk' },
      { label: 'Find your subject guide', href: 'https://libraryguides.sheffield.ac.uk/' },
    ],
    blueBar: true,
  },
};

export const WithImage: Story = {
  args: {
    heading: 'Experience Sheffield for yourself',
    body: 'The best way to find out what studying at Sheffield is like is to visit us. You\'ll get a feel for the atmosphere, the people, the campus and the city.',
    links: [{ label: 'Visit us', href: '/visit-us/home' }],
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-05/39718.jpg',
    imageAlt: 'Numerous people walking around inside a bright white spacious building (The Wave).',
    blueBar: false,
  },
};

export const NoBody: Story = {
  args: {
    heading: 'A global reputation',
    links: [{ label: 'About the University', href: '/about/home' }],
    blueBar: true,
  },
};
