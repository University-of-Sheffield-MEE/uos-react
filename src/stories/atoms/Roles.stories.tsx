import type { Meta, StoryObj } from '@storybook/react';
import { Roles } from '../../components/atoms/Roles';

const meta: Meta<typeof Roles> = {
  title: 'Atoms/Roles',
  component: Roles,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Roles>;

export const Default: Story = {
  args: {
    text: 'Senior Technical Fellow',
  },
};

export const StudyAbroadTutor: Story = {
  args: {
    text: 'Study Abroad Tutor',
  },
};

export const DirectorRole: Story = {
  args: {
    text: 'Undergraduate Level 1 Director',
  },
};
