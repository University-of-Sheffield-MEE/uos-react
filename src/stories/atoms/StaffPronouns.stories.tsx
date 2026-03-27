import type { Meta, StoryObj } from '@storybook/react';
import { StaffPronouns } from '../../components/atoms/StaffPronouns';

const meta: Meta<typeof StaffPronouns> = {
  title: 'Atoms/StaffPronouns',
  component: StaffPronouns,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a staff member\'s personal pronouns in parentheses as an inline span.\n\n[Example page](https://sheffield.ac.uk/architecture-landscape/people/academic/matthew-bradshaw)',
      },
    },
  },
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
