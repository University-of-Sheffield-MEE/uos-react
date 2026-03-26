import type { Meta, StoryObj } from '@storybook/react';
import { ImageGallery } from '../../components/molecules/ImageGallery';

const meta: Meta<typeof ImageGallery> = {
  title: 'Molecules/ImageGallery',
  component: ImageGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

export const Default: Story = {
  args: {
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2022-09/2.png.jpg',
    imageAlt: 'Her Majesty the Queen and Prince Philip, Duke of Edinburgh, arriving at the University.',
    figcaption: 'Her Majesty the Queen and Prince Philip, Duke of Edinburgh, arriving at the University.',
    imageCount: 5,
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-04/Shore%20Court%20%289%29%201%20Bed%20-%20Kitchen.jpg',
    imageAlt: 'A kitchen in Shore Court',
    figcaption: 'The kitchen area in a one bedroom property at Shore Court.',
    title: 'Shore Court',
    description: 'Explore Shore Court accommodation',
    imageCount: 7,
  },
};

export const NoFigcaption: Story = {
  args: {
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2023-07/Leake-07%20-%20Genevieve%20ME%20Leake.jpg',
    imageAlt: "Genevieve's work",
    imageCount: 4,
  },
};
