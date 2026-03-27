import type { Meta, StoryObj } from '@storybook/react';
import { AtozList } from '../../components/molecules/AtozList';

const meta: Meta<typeof AtozList> = {
  title: 'Molecules/AtozList',
  component: AtozList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AtozList>;

export const Default: Story = {
  args: {
    items: [
      { label: 'A', href: '#A' },
      { label: 'B', href: '#B' },
      { label: 'C', href: '#C' },
      { label: 'D', href: '#D' },
      { label: 'E', href: '#E' },
      { label: 'G', href: '#G' },
      { label: 'H', href: '#H' },
      { label: 'J', href: '#J' },
      { label: 'K', href: '#K' },
      { label: 'M', href: '#M' },
      { label: 'N', href: '#N' },
      { label: 'P', href: '#P' },
      { label: 'R', href: '#R' },
      { label: 'S', href: '#S' },
      { label: 'T', href: '#T' },
      { label: 'V', href: '#V' },
      { label: 'W', href: '#W' },
      { label: 'Z', href: '#Z' },
    ],
  },
};

export const FewLetters: Story = {
  args: {
    items: [
      { label: 'F', href: '#F' },
      { label: 'G', href: '#G' },
    ],
  },
};

export const FullAlphabet: Story = {
  args: {
    items: [
      { label: 'A', href: '#A' },
      { label: 'B', href: '#B' },
      { label: 'C', href: '#C' },
      { label: 'D', href: '#D' },
      { label: 'E', href: '#E' },
      { label: 'F', href: '#F' },
      { label: 'G', href: '#G' },
      { label: 'H', href: '#H' },
      { label: 'I', href: '#I' },
      { label: 'J', href: '#J' },
      { label: 'K', href: '#K' },
      { label: 'L', href: '#L' },
      { label: 'M', href: '#M' },
      { label: 'N', href: '#N' },
      { label: 'O', href: '#O' },
      { label: 'P', href: '#P' },
      { label: 'R', href: '#R' },
      { label: 'S', href: '#S' },
      { label: 'T', href: '#T' },
      { label: 'W', href: '#W' },
      { label: 'Y', href: '#Y' },
      { label: 'Z', href: '#Z' },
    ],
  },
};
