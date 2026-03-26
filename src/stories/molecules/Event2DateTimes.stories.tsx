import type { Meta, StoryObj } from '@storybook/react';
import { Event2DateTimes } from '../../components/molecules/Event2DateTimes';

const meta: Meta<typeof Event2DateTimes> = {
  title: 'Molecules/Event2DateTimes',
  component: Event2DateTimes,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Event2DateTimes>;

export const Default: Story = {
  args: {
    isEventListing: true,
    hasTakenPlace: false,
    dateTimeText: 'Thursday 7 May 2026 - 6:30pm to 8:30pm',
    isEventToday: true,
    googleCalendarHref: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Example+Event',
    appleCalendarHref: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR',
    outlookCalendarHref: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR',
  },
};

export const WithRegistrationLink: Story = {
  args: {
    isEventListing: true,
    hasTakenPlace: false,
    dateTimeText: 'Monday 20 April 2026 - 12:00pm to 3:00pm',
    isEventToday: true,
    registrationHref: 'https://www.tickettailor.com/events/universityofsheffield2/2021956',
    registrationLabel: 'Register here',
    googleCalendarHref: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Example+Event',
    appleCalendarHref: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR',
    outlookCalendarHref: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR',
  },
};

export const PastEvent: Story = {
  args: {
    isEventListing: true,
    hasTakenPlace: true,
  },
};
