import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedVideo } from '../../components/molecules/FeaturedVideo';

const meta: Meta<typeof FeaturedVideo> = {
  title: 'Molecules/FeaturedVideo',
  component: FeaturedVideo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedVideo>;

export const Default: Story = {
  args: {
    videoThumbnailSrc: 'https://sheffield.ac.uk/cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/PCuj9wuPRpI.jpg',
    videoTitle: 'Student Success - Sulaiman',
    heading: "Sulaiman's story",
    description: "Sulaiman is the first in his family to come to university. Without the financial support that his donor-funded scholarship offers, he'd never have been able to pursue his dream of becoming a doctor.",
  },
};

export const WithSectionTitle: Story = {
  args: {
    sectionTitle: 'Charity Leadership',
    videoThumbnailSrc: 'https://sheffield.ac.uk/cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/1_8qqep5aq.jpg',
    videoTitle: 'The Boardroom 24: Charity Leadership',
    heading: 'Session 1',
    description: 'Hear the experiences, challenges and opportunities of three respected professionals working in the charity sector.',
  },
};

export const WithLink: Story = {
  args: {
    videoThumbnailSrc: 'https://sheffield.ac.uk/cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/1_du4zqtpm.jpg',
    videoTitle: "At Sheffield we're makers",
    heading: 'Making our mark on the world',
    description: "We're curious about the world and know our vital role in creating positive change within it.",
    featTitle: 'How we define and enable impact',
    linkHref: '/vision/our-pillars/innovation/impact',
  },
};

export const WithFigureCaption: Story = {
  args: {
    videoThumbnailSrc: 'https://sheffield.ac.uk/cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/8kpDsEn8em0.jpg',
    videoTitle: 'Magnomatics: Placing talent within industry',
    figureCaption: 'Magnomatics: Placing talent within industry',
    heading: 'Magnomatics: Placing Talent Within Industry',
    description: '"This experience has given me a strong engineering portfolio to put forward in future job interviews."',
  },
};
