import type { Meta, StoryObj } from '@storybook/react';
import { NlpHeader } from '../../components/organisms/NlpHeader';

const meta: Meta<typeof NlpHeader> = {
  title: 'Organisms/NlpHeader',
  component: NlpHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Full-width landing page hero header with a responsive banner image, a heading, a description paragraph, and a scroll-down arrow button.\n\n[Example page](https://sheffield.ac.uk/english/home)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NlpHeader>;

export const Default: Story = {
  args: {
    title: 'School of English',
    description:
      'We are an interdisciplinary school, forming a community that truly brings together and sits at the interface of literature, language and linguistics.',
    imageSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_mobile_1x/public/2019-03/31602.jpg?h=f7a0e3ff&itok=ktss9_3N',
    imageAlt: 'The Jessop West building',
    scrollTarget: '.region.region-breadcrumbs',
  },
};

export const NoImage: Story = {
  args: {
    title: 'PD-AGE',
    description:
      'International network for Parkinson\'s Disease modelling and AGEing. We are pioneering a global collaboration exploring the impact of ageing on Parkinson\'s disease.',
    scrollTarget: '.region.region-breadcrumbs',
  },
};

export const ShortDescription: Story = {
  args: {
    title: 'Facilities',
    description:
      'We\'re home to world-class facilities that support research both within the University of Sheffield and in collaboration with a wide variety of partners.',
    imageSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_mobile_1x/public/2020-01/DSC09731.jpg?h=e3382044&itok=Lw7z9b5Y',
    imageAlt: 'The Diamond Pilot Plant',
    scrollTarget: '.region.region-breadcrumbs',
  },
};
