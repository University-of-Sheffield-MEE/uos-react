import type { Meta, StoryObj } from '@storybook/react';
import { NewsArticleMediaBlock } from '../../components/molecules/NewsArticleMediaBlock';

const meta: Meta<typeof NewsArticleMediaBlock> = {
  title: 'Molecules/NewsArticleMediaBlock',
  component: NewsArticleMediaBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsArticleMediaBlock>;

export const Default: Story = {
  args: {
    srcWide1x:
      'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=1W49wkCS 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=FlUD7eSg 1504w',
    srcDesktop1x:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=F3P8GJj6 1280w',
    srcTablet1x:
      'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=RVaF3FyO 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=8hgbaEAc 1184w',
    srcMobile1x:
      'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=v19Gdj2D 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=Okk6MjNd 750w',
    imgSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2020-10/GettyImages-1194457168.jpg?h=18c9bec3&itok=v19Gdj2D',
    imgAlt: 'Rice and spoon',
  },
};

export const WithCaption: Story = {
  args: {
    srcWide1x:
      'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=KIdYN3zx 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=8cBEICWq 1504w',
    srcDesktop1x:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=tybVDJPQ 1280w',
    srcTablet1x:
      'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=C7z_2mfS 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=0yj4P67B 1184w',
    srcMobile1x:
      'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=rgwmzWgB 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=NNOoUH8n 750w',
    imgSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-01/soldier-60762_1920.jpg?h=d7a94c23&itok=rgwmzWgB',
    imgAlt: 'Soldier',
    caption: 'Image by Amber Clay from Pixabay',
  },
};
