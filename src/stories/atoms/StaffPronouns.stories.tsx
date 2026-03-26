import type { Meta, StoryObj } from '@storybook/react';
import { StaffPronouns } from '../../components/atoms/StaffPronouns';

const meta: Meta<typeof StaffPronouns> = {
  title: 'Atoms/StaffPronouns',
  component: StaffPronouns,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StaffPronouns>;

export const Default: Story = {
  args: {
    pronouns: '(he/him)',
  },
};

export const SheHer: Story = {
  args: {
    pronouns: '(she/her)',
  },
};

export const TheyThem: Story = {
  args: {
    pronouns: '(they/them)',
  },
};
