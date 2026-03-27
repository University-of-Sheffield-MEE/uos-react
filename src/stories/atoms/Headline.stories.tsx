import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from '../../components/atoms/Headline';

const meta: Meta<typeof Headline> = {
  title: 'Atoms/Headline',
  component: Headline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled h1 heading element used as the primary page or article headline.\n\n[Example page](https://sheffield.ac.uk/library/news/showcasing-white-rose-university-press-quality-and-innovation-open-access-publishing)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Default: Story = {
  args: {
    text: 'Showcasing White Rose University Press: Quality and Innovation in Open Access Publishing',
  },
};

export const LongTitle: Story = {
  args: {
    text: 'Centre for Poetry and Poetics, Sheffield, Presents: Lila Matsumoto, Nat Raha, Nisha Ramayya and Sophie Seita',
  },
};

export const ShortTitle: Story = {
  args: {
    text: 'City campaign receives prestigious prize at Times Higher Education Awards 2023',
  },
};
