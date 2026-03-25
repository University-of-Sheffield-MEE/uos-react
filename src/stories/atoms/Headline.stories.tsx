import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from '../../components/atoms/Headline';

const meta: Meta<typeof Headline> = {
  title: 'Atoms/Headline',
  component: Headline,
  tags: ['autodocs'],
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
