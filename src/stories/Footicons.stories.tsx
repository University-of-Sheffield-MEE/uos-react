import type { Meta, StoryObj } from '@storybook/react';
import { Footicons } from '../components/Footicons';

const meta: Meta<typeof Footicons> = {
  title: 'Components/Footicons',
  component: Footicons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footicons>;

export const Default: Story = {};
