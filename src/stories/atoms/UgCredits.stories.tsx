import type { Meta, StoryObj } from '@storybook/react';
import { UgCredits } from '../../components/atoms/UgCredits';

const meta: Meta<typeof UgCredits> = {
  title: 'Atoms/UgCredits',
  component: UgCredits,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A bold inline label displaying a university module\'s credit count, used within course module descriptions on undergraduate course pages.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
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
