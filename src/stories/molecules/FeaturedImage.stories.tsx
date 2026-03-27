import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedImage } from '../../components/molecules/FeaturedImage';

const meta: Meta<typeof FeaturedImage> = {
  title: 'Molecules/FeaturedImage',
  component: FeaturedImage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A featured image block combining a responsive picture element with a descriptive text panel containing a heading, body text, a label title, and an optional arrow link indicator.\n\n[Example page](https://sheffield.ac.uk/undergraduate/visit/offer-holder/guide)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedImage>;

export const Default: Story = {
  args: {
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2023-11/pexels-alex-green-5699418.jpg',
    imageAlt: 'Image of two people sitting on sofas in therapy setting',
    imageWidth: 375,
    imageHeight: 211,
    heading: 'Pioneering therapy could offer hope for psychosis patients',
    bodyText: 'A pioneering therapy for people with psychosis could lead to a transformative intervention for a condition estimated to cost England almost £12 billion a year.',
    featTitle: 'Read more',
    showLinkArrow: true,
  },
};

export const WithFigcaption: Story = {
  args: {
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-01/Adult%20flies.jpg',
    imageAlt: 'Two sedated adult Drosophila, one male and one female.',
    imageWidth: 375,
    imageHeight: 211,
    figcaption: 'Adult Drosophila',
    heading: 'Why do we study flies?',
    bodyText: 'Here at the University of Sheffield Fly Facility we use the fruit fly as a model organism to study a wide variety of biological processes.',
    featTitle: 'Find out why they are useful.',
    showLinkArrow: true,
  },
};

export const MinimalDescription: Story = {
  args: {
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2022-07/EPS8%20gene%20therapy.png.jpg',
    imageAlt: 'EPS8',
    imageWidth: 375,
    imageHeight: 211,
    featTitle: 'Gene therapy',
    showLinkArrow: true,
  },
};

export const NoArrow: Story = {
  args: {
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-06/laura%20reduced.jpg',
    imageAlt: 'Laura Corns',
    imageWidth: 375,
    imageHeight: 211,
    heading: 'Dr Laura Corns',
    bodyText: 'Associate University Teacher\n\nSchool of Biosciences\nDevelopment, Regeneration and Neurophysiology',
    showLinkArrow: false,
  },
};
