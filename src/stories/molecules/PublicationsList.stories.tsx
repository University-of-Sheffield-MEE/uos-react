import type { Meta, StoryObj } from '@storybook/react';
import { PublicationsList } from '../../components/molecules/PublicationsList';

const meta: Meta<typeof PublicationsList> = {
  title: 'Molecules/PublicationsList',
  component: PublicationsList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A list of academic publications, each with author details, a title link, journal citation, optional repository link, and export download icons for RIS and BibTeX formats.\n\n[Example page](https://sheffield.ac.uk/mps/people/research-staff/bradley-westwater)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PublicationsList>;

export const Default: Story = {
  args: {
    items: [
      {
        authors: 'Westwater B, Lloyd H, Vitorica-Yrzebal I, Fong A, McMaster P, Sloan M, Coaker B, Pulham CR & Portius P (2020)',
        titleHref: 'http://dx.doi.org/10.1039/d0dt03077e',
        title: 'Synthesis and characterization of the mixed-ligand coordination polymer Cu3Cl(N4C-NO2)2',
        journal: 'Dalton Transactions',
        volumeAndPages: '49(42), 14975-14984.',
        wrroHref: 'https://eprints.whiterose.ac.uk/id/eprint/166937',
        risExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=77048901ba404b0e20115dd6e42cd3bc869dcd3d&type=ris',
        bibtexExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=77048901ba404b0e20115dd6e42cd3bc869dcd3d&type=bibtex',
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    items: [
      {
        authors: 'Kerrigan K, Phadnis VA, M\'Saoubi R & Scaife RJ (2025)',
        titleHref: 'http://dx.doi.org/10.1016/j.procir.2024.11.003',
        title: 'Critical damage modes in high-performance drilling of carbon fibre reinforced epoxy composites',
        journal: 'Procedia CIRP',
        volumeAndPages: '131(2025), 100-106.',
        wrroHref: 'https://eprints.whiterose.ac.uk/id/eprint/225041',
        risExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=58f7ca4160070f7f0f5369fc1da4db406ee1e724&type=ris',
        bibtexExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=58f7ca4160070f7f0f5369fc1da4db406ee1e724&type=bibtex',
      },
      {
        authors: 'Seward O, Cepero-Mejías F, Fairclough JPA & Kerrigan K (2022)',
        titleHref: 'http://dx.doi.org/10.3390/polym14050847',
        title: 'Development of a novel friction model for machining simulations in unidirectional composite materials',
        journal: 'Polymers',
        volumeAndPages: '14(5).',
        risExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=d45eaa19cfc878cecd80826623067a695d674a6d&type=ris',
        bibtexExportHref: 'https://www.sheffield.ac.uk/publications/export/?id=d45eaa19cfc878cecd80826623067a695d674a6d&type=bibtex',
      },
    ],
  },
};

export const NoExportLinks: Story = {
  args: {
    items: [
      {
        authors: 'Smith J & Jones A (2023)',
        titleHref: 'http://dx.doi.org/10.1000/example',
        title: 'An example publication title for a journal article',
        journal: 'Example Journal',
        volumeAndPages: '10(1), 1-10.',
      },
    ],
  },
};
