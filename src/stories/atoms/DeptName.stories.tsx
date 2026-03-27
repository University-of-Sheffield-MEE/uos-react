import type { Meta, StoryObj } from '@storybook/react';
import { DeptName } from '../../components/atoms/DeptName';

const meta: Meta<typeof DeptName> = {
  title: 'Atoms/DeptName',
  component: DeptName,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a department or school name, used in person profiles and listing teasers.\n\n[Example page](https://sheffield.ac.uk/mps/people/research-staff/bradley-westwater)',
      },
    },
  },
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
