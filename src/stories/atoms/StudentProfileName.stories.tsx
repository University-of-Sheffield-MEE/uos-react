import type { Meta, StoryObj } from '@storybook/react';
import { StudentProfileName } from '../../components/atoms/StudentProfileName';

const meta: Meta<typeof StudentProfileName> = {
  title: 'Atoms/StudentProfileName',
  component: StudentProfileName,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StudentProfileName>;

export const Name: Story = {
  args: {
    text: 'Romesa Khawaja',
    fieldType: 'name',
  },
};

export const BlackTextSubHeader: Story = {
  args: {
    text: 'President',
    fieldType: 'black-text-sub-header',
  },
};

export const GreyTextSubHeader: Story = {
  args: {
    text: 'General Engineering Masters Society',
    fieldType: 'grey-text-sub-header',
  },
};

export const Year: Story = {
  args: {
    text: '2023',
    fieldType: 'year',
  },
};
