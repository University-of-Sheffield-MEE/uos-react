import type { Meta, StoryObj } from '@storybook/react';
import { HomehubTop } from '../../components/molecules/HomehubTop';

const meta: Meta<typeof HomehubTop> = {
  title: 'Molecules/HomehubTop',
  component: HomehubTop,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Top section of a research hub page that displays a horizontal scrollable row of partner and funder logos.\n\n[Example page](https://sheffield.ac.uk/ahpnm/apprenticeships)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomehubTop>;

export const Default: Story = {
  args: {
    logos: [
      {
        src: '//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2025-02/Ofsted_Good_GP_Colour2_1.png.jpg?itok=rr19tj8k',
        alt: 'Ofsted Good Provider logo',
      },
    ],
    showScrollArrows: false,
  },
};

export const WithLinks: Story = {
  args: {
    logos: [
      {
        src: '//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2024-04/Buck_logo_tagline_period.png.jpg?itok=TA4d6cWQ',
        alt: 'Logo for Buck, with the tagline "Live better longer."',
        href: 'https://www.buckinstitute.org/',
        ariaLabel: 'The Buck Institute',
      },
      {
        src: '//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2023-10/HELSI-logo.png.jpg?itok=NRptHbTr',
        alt: 'Healthy Lifespan Institute at the University of Sheffield logo',
        href: 'https://www.sheffield.ac.uk/healthy-lifespan',
        ariaLabel: 'Healthy Lifespan Institute',
      },
    ],
    showScrollArrows: true,
  },
};

export const WithScrollArrows: Story = {
  args: {
    logos: [
      {
        src: '//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-07/advocatelogo.jpg?h=30a956c2&itok=OkPJ4iJD',
        alt: 'The ADVOCATE project logo',
        href: 'http://www.sheffield.ac.uk/advocate-eu',
        ariaLabel: 'ADVOCATE Project',
      },
      {
        src: '//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-07/EU%20logo.jpeg.jpg?itok=1cudQnum',
        alt: 'EU logo',
        href: 'https://europa.eu/european-union/index_en',
        ariaLabel: 'European Union',
      },
    ],
    showScrollArrows: true,
  },
};
