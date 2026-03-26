import type { Meta, StoryObj } from '@storybook/react';
import { MainRole } from '../../components/atoms/MainRole';

const meta: Meta<typeof MainRole> = {
  title: 'Atoms/MainRole',
  component: MainRole,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainRole>;

export const Default: Story = {
  args: {
    role: 'Research Associate',
  },
};

export const LongTitle: Story = {
  args: {
    role: 'Senior Technician: Instrumentation',
  },
};

export const Group: Story = {
  render: () => (
    <div className="personinfo">
      <MainRole role="Professor" />
      <MainRole role="Research Associate" />
      <MainRole role="Senior Lecturer in Computer Science" />
    </div>
  ),
};
