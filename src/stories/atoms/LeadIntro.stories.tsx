import type { Meta, StoryObj } from '@storybook/react';
import { LeadIntro } from '../../components/atoms/LeadIntro';

const meta: Meta<typeof LeadIntro> = {
  title: 'Atoms/LeadIntro',
  component: LeadIntro,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LeadIntro>;

export const Default: Story = {
  args: {
    children: 'MBA student, Ambuj, shares his experience of attending summer school in Munich.',
  },
};

export const LongerIntro: Story = {
  args: {
    children: 'How to travel to Sheffield from various UK airports.',
  },
};
