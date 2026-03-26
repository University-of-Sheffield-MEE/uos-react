import type { Meta, StoryObj } from '@storybook/react';
import { AccredBanner } from '../../components/molecules/AccredBanner';

const meta: Meta<typeof AccredBanner> = {
  title: 'Molecules/AccredBanner',
  component: AccredBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccredBanner>;

export const Default: Story = {};
