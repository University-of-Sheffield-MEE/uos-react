import type { Meta, StoryObj } from '@storybook/react';
import { ViewsExposedForm } from '../../components/molecules/ViewsExposedForm';

const meta: Meta<typeof ViewsExposedForm> = {
  title: 'Molecules/ViewsExposedForm',
  component: ViewsExposedForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ViewsExposedForm>;

export const NewsSearch: Story = {
  args: {
    action: '/english/news',
    searchLabel: 'Search',
    searchPlaceholder: 'Search news',
    submitLabel: 'Apply',
    showDateFilter: false,
    isEventFilter: false,
  },
};

export const EventsSearch: Story = {
  args: {
    action: '/cmbe/school/events',
    searchLabel: 'Search by title, venue or description',
    searchPlaceholder: 'Search events',
    submitLabel: 'Search',
    showDateFilter: true,
    dateLabel: 'Events from',
    isEventFilter: true,
  },
};
