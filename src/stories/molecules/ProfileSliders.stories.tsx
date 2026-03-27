import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSliders } from '../../components/molecules/ProfileSliders';

const meta: Meta<typeof ProfileSliders> = {
  title: 'Molecules/ProfileSliders',
  component: ProfileSliders,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A pair of left/right navigation buttons for cycling through a profile slider, with support for an inactive (disabled) state on either button.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2027/electrical-and-electronic-engineering-meng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileSliders>;

export const Default: Story = {
  args: {
    leftInactive: true,
    rightInactive: false,
  },
};

export const RightInactive: Story = {
  args: {
    leftInactive: false,
    rightInactive: true,
  },
};

export const BothActive: Story = {
  args: {
    leftInactive: false,
    rightInactive: false,
  },
};
