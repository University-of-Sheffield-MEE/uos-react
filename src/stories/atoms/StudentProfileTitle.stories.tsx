import type { Meta, StoryObj } from '@storybook/react';
import { StudentProfileTitle } from '../../components/atoms/StudentProfileTitle';

const meta: Meta<typeof StudentProfileTitle> = {
  title: 'Atoms/StudentProfileTitle',
  component: StudentProfileTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StudentProfileTitle>;

export const Default: Story = {
  args: {
    quote: 'Your time at Sheffield will go by so quickly – so have fun!',
  },
};

export const LongQuote: Story = {
  args: {
    quote: 'Having studied geography at undergraduate level I had covered areas of urban planning and always wanted to explore it further',
  },
};
