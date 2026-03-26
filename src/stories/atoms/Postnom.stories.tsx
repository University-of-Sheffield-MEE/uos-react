import type { Meta, StoryObj } from '@storybook/react';
import { Postnom } from '../../components/atoms/Postnom';

const meta: Meta<typeof Postnom> = {
  title: 'Atoms/Postnom',
  component: Postnom,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Postnom>;

export const Default: Story = {
  args: {
    text: 'BEng, SFHEA, PhD',
  },
};

export const ShortPostnom: Story = {
  args: {
    text: 'BSc, MSc',
  },
};

export const LongPostnom: Story = {
  args: {
    text: 'BA (Hons), MA, PhD, FRSA, FHEA, CEng',
  },
};
