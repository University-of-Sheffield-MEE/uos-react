import type { Meta, StoryObj } from '@storybook/react';
import { UgCredits } from '../../components/atoms/UgCredits';

const meta: Meta<typeof UgCredits> = {
  title: 'Atoms/UgCredits',
  component: UgCredits,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UgCredits>;

export const Default: Story = {
  args: {
    credits: '20 credits',
  },
};

export const FortyCredits: Story = {
  args: {
    credits: '40 credits',
  },
};

export const Group: Story = {
  render: () => (
    <div className="ugtext">
      <UgCredits credits="20 credits" />
      <UgCredits credits="40 credits" />
      <UgCredits credits="20 credits" />
      <UgCredits credits="10 credits" />
    </div>
  ),
};
