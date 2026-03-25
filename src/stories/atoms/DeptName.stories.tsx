import type { Meta, StoryObj } from '@storybook/react';
import { DeptName } from '../../components/atoms/DeptName';

const meta: Meta<typeof DeptName> = {
  title: 'Atoms/DeptName',
  component: DeptName,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeptName>;

export const Default: Story = {
  args: {
    name: 'School of Mathematical and Physical Sciences',
  },
};

export const LongName: Story = {
  args: {
    name: 'School of Sociological Studies, Politics and International Relations',
  },
};
