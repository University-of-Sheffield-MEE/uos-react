import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '../../components/atoms/Callout';

const meta: Meta<typeof Callout> = {
  title: 'Atoms/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Foundation CSS callout box used to display alert or informational messages, supporting colour-scheme variants such as secondary.\n\n[Example page](https://sheffield.ac.uk/mps/people/honorary/sarah-staniland)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    variant: 'secondary',
    children: <p>There has been a problem showing this information. Please try again later.</p>,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: <p>This is a primary callout message.</p>,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: <p>Please be aware this page content may change.</p>,
  },
};
