import type { Meta, StoryObj } from '@storybook/react';
import { NewsDate } from '../../components/atoms/NewsDate';

const meta: Meta<typeof NewsDate> = {
  title: 'Atoms/NewsDate',
  component: NewsDate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsDate>;

export const Default: Story = {
  args: {
    datetime: '2024-08-30T10:46:30+01:00',
    label: '30 August 2024',
  },
};

export const RecentDate: Story = {
  args: {
    datetime: '2025-03-07T10:29:48+00:00',
    label: '7 March 2025',
  },
};

export const OlderDate: Story = {
  args: {
    datetime: '2020-09-14T12:15:00+01:00',
    label: '14 September 2020',
  },
};
