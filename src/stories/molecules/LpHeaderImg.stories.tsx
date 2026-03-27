import type { Meta, StoryObj } from '@storybook/react';
import { LpHeaderImg } from '../../components/molecules/LpHeaderImg';

const meta: Meta<typeof LpHeaderImg> = {
  title: 'Molecules/LpHeaderImg',
  component: LpHeaderImg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Full-width landing page header banner image wrapper containing a responsive picture element with multiple breakpoint sources.\n\n[Example page](https://sheffield.ac.uk/english/home)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LpHeaderImg>;

export const Default: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_mobile_1x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=m2F76mAw',
    alt: "Faculty of Engineering's Heartspace and Mappin buildings from the Portobello street entrance",
    width: 384,
    height: 144,
    sources: [
      {
        srcSet:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_desktop_1z/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=yXlpxPyG 1920w, https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_8_3/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=Vu2dK2cL 2560w',
        media: 'all and (min-width: 1920px)',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 1920,
        height: 720,
      },
      {
        srcSet:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_laptop_1x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=87Ukrt9B 1280w, https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_laptop_2x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=zRiYxUga 2560w',
        media: 'screen and (min-width: 1280px)',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 2560,
        height: 960,
      },
      {
        srcSet:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_tablet_1x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=6vgEmYew 1024w, https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_tablet_2x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=97KessqC 2048w',
        media: 'screen and (min-width: 1024px)',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 2048,
        height: 768,
      },
      {
        srcSet:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_portrait_tablet_1x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=wK8XMmf7 768w, https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_portrait_tablet_2x_1536_576_/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=PH5esUrY 1536w',
        media: 'screen and (min-width: 768px)',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 1536,
        height: 576,
      },
      {
        srcSet:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_mobile_1x/public/2022-09/Heartspace-012.jpg?h=433c0086&itok=m2F76mAw 1x',
        type: 'image/jpeg',
        width: 384,
        height: 144,
      },
    ],
  },
};

export const WithAltText: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/full_width_banner_mobile_1x/public/2019-10/_DB_5813.jpg?h=f3948ad9&itok=AScEgbf4',
    alt: 'A researcher using an atomic force microscope',
    width: 384,
    height: 144,
    sources: [
      {
        srcSet:
          'https://sheffield.ac.uk/sites/default/files/styles/full_width_banner_desktop_1z/public/2019-10/_DB_5813.jpg?h=f3948ad9&itok=hUKMuN0- 1920w',
        media: 'all and (min-width: 1920px)',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 1920,
        height: 720,
      },
    ],
  },
};
