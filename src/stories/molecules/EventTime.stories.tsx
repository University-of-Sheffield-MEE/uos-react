import type { Meta, StoryObj } from '@storybook/react';
import { EventTime } from '../../components/molecules/EventTime';

const meta: Meta<typeof EventTime> = {
  title: 'Molecules/EventTime',
  component: EventTime,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Event date and time list item showing a formatted date range or single date, an add-to-calendar button, and an optional registration link.\n\n[Example page](https://sheffield.ac.uk/centre-for-poetry-and-poetics/events/camilla-nelson-rhys-trimble)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventTime>;

export const Default: Story = {
  args: {
    dateText: 'Thursday 7 May 2026 - 6:30pm to 8:30pm',
    isToday: true,
  },
};

export const WithRegistrationLink: Story = {
  args: {
    dateText: 'Tuesday 23 June 2026 - 10:00am to 5:00pm',
    isToday: true,
    registrationHref: 'https://onlineshop.shef.ac.uk/conferences-and-events/example',
    registrationLabel: 'Book your place now',
  },
};

export const MultiDate: Story = {
  args: {
    dateText: 'from Wednesday 20 May 2026 - 12:00pm to Thursday 21 May 2026 - 3:00pm',
    isMultiDate: true,
    isToday: true,
    registrationHref: 'https://www.example.com/event',
    registrationLabel: 'Discover more',
  },
};

export const MultiDateNoLink: Story = {
  args: {
    dateText: 'from Tuesday 14 July 2026 - 9:00am to Wednesday 15 July 2026 - 5:00pm',
    isMultiDate: true,
    isToday: true,
  },
};
