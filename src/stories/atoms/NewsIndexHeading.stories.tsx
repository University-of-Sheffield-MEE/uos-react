import type { Meta, StoryObj } from '@storybook/react';
import { NewsIndexHeading } from '../../components/atoms/NewsIndexHeading';

const meta: Meta<typeof NewsIndexHeading> = {
  title: 'Atoms/NewsIndexHeading',
  component: NewsIndexHeading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled h2 heading used on news index pages, always displaying \'News stories\'.\n\n[Example page](https://sheffield.ac.uk/english/news)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsIndexHeading>;

export const Default: Story = {
  args: {
    text: 'News stories',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Latest news',
  },
};
