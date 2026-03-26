import type { Meta, StoryObj } from '@storybook/react';
import { Accreds } from '../../components/molecules/Accreds';

const meta: Meta<typeof Accreds> = {
  title: 'Molecules/Accreds',
  component: Accreds,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accreds>;

export const Default: Story = {
  args: {
    items: [
      {
        href: 'https://www.rsc.org',
        imgSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2020-10/rsc_logo_a_d_a4-zone.jpg',
        imgAlt: 'Royal Society of Chemistry logo',
        label: 'Royal Society of Chemistry (RSC)',
      },
    ],
  },
};

export const MultipleAccreditations: Story = {
  args: {
    items: [
      {
        href: 'https://www.theiet.org/',
        imgSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2020-09/IET%20Accreditation%20Logo.jpg',
        imgAlt: 'IET Accreditation Logo 2020',
        label: 'Institution of Engineering and Technology (IET)',
      },
      {
        href: 'https://www.instmc.org',
        imgSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2020-09/InstMC.jpg',
        imgAlt: 'InstMC Accreditation Logo 2020',
        label: 'Institute of Measurement and Control (InstMC)',
      },
      {
        href: 'https://www.engc.org.uk/',
        imgSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2020-09/Engineering%20Council%20Accreditation-01.png.jpg',
        imgAlt: 'Engineering Council Accreditation Logo 2020',
        label: 'Engineering Council',
      },
    ],
  },
};

export const IMechE: Story = {
  args: {
    items: [
      {
        href: 'https://www.imeche.org/',
        imgSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_128px_x_288px_/public/2021-08/IMechE-01.png.jpg',
        imgAlt: 'IMechE Logo',
        label: 'Institution of Mechanical Engineers (IMechE)',
      },
    ],
  },
};
