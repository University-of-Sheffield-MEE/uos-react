import type { Meta, StoryObj } from '@storybook/react';
import { BackToTop2 } from '../components/BackToTop2';

const meta: Meta<typeof BackToTop2> = {
  title: 'Components/BackToTop2',
  component: BackToTop2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackToTop2>;

export const Default: Story = {
  args: {},
};
