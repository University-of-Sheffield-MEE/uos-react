import type { Meta, StoryObj } from '@storybook/react';
import { LogosHomehub } from '../../components/molecules/LogosHomehub';

const meta: Meta<typeof LogosHomehub> = {
  title: 'Molecules/LogosHomehub',
  component: LogosHomehub,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A full-width scrollable row of partner or sponsor logos, optionally with a descriptive paragraph, used on hub pages.\n\n[Example page](https://sheffield.ac.uk/international/germany)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogosHomehub>;

export const Default: Story = {
  args: {
    logos: [
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2022-11/UOSLogo_Primary_Violet_RGB.jpg',
        alt: 'The University of Sheffield logo',
        href: 'https://www.sheffield.ac.uk',
        ariaLabel: 'The University of Sheffield',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-06/EPSRC%20logo.jpg',
        alt: 'EPSRC logo',
        href: 'https://www.ukri.org/',
        ariaLabel: 'EPSRC',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2024-04/nhs-logo-880x4951.jpeg.jpg',
        alt: 'NHS logo',
      },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    description:
      "Make it Grow is a Knowledge Exchange project for the Institute for Sustainable Food, University of Sheffield, supported by the UKRI's Economic and Social Research Council.",
    logos: [
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-09/Copy%20of%20MiG%20Logo%20crop.jpg',
        alt: 'Make it Grow logo',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-07/advocatelogo.jpg',
        alt: 'The ADVOCATE project logo',
        href: 'http://www.sheffield.ac.uk/advocate-eu',
        ariaLabel: 'ADVOCATE Project',
      },
    ],
  },
};

export const WithScrollArrows: Story = {
  args: {
    showScrollArrows: true,
    logos: [
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2024-04/Buck_logo_tagline_period.png.jpg',
        alt: 'Logo for Buck, with the tagline "Live better longer."',
        href: 'https://www.buckinstitute.org/',
        ariaLabel: 'The Buck Institute',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2022-11/UOSLogo_Primary_Violet_RGB.jpg',
        alt: 'The University of Sheffield logo',
        href: 'https://www.sheffield.ac.uk',
        ariaLabel: 'The University of Sheffield',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-06/EPSRC%20logo.jpg',
        alt: 'EPSRC logo',
        href: 'https://www.ukri.org/',
        ariaLabel: 'EPSRC',
      },
      {
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2025-02/Ofsted_Good_GP_Colour2_1.png.jpg',
        alt: 'Ofsted Good Provider logo',
      },
    ],
  },
};
