import type { Meta, StoryObj } from '@storybook/react';
import { ProfileLinkPromo } from '../../components/molecules/ProfileLinkPromo';

const meta: Meta<typeof ProfileLinkPromo> = {
  title: 'Molecules/ProfileLinkPromo',
  component: ProfileLinkPromo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileLinkPromo>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Personal Website', href: 'https://sites.google.com/site/alonzivony/c-v' },
    ],
  },
};

export const MultipleLinks: Story = {
  args: {
    links: [
      { label: 'Personal website', href: 'https://olyah.com/' },
      { label: "Hesam Olya's ResearchGate", href: 'https://www.researchgate.net/profile/Hesam-Olya' },
      { label: 'News: Keynotes, training, media presence and engagement with policy makers', href: 'https://olyah.com/news' },
    ],
  },
};

export const InternalLink: Story = {
  args: {
    links: [
      { label: 'Semiconductor and Quantum Technologies', href: '/eee/research/themes/semiconductor-and-quantum-technologies' },
    ],
  },
};
