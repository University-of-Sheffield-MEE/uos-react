import type { Meta, StoryObj } from '@storybook/react';
import { CalendarButtons } from '../../components/molecules/CalendarButtons';

const meta: Meta<typeof CalendarButtons> = {
  title: 'Molecules/CalendarButtons',
  component: CalendarButtons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A set of three add-to-calendar links allowing users to add an event to Google Calendar, Apple Calendar, or Microsoft Outlook.\n\n[Example page](https://sheffield.ac.uk/centre-for-poetry-and-poetics/events/camilla-nelson-rhys-trimble)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarButtons>;

export const Default: Story = {
  args: {
    googleCalendarHref:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Annual+Research+and+Innovation+Meeting+2026&dates=20260714T090000/20260715T170000&ctz=Europe/London&location=The+Wave',
    icalHref:
      'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260714T090000%0ADTEND:20260715T170000%0ASUMMARY:Annual+Research+and+Innovation+Meeting+2026%0ADESCRIPTION:The+Wave%0AEND:VEVENT%0AEND:VCALENDAR',
    outlookHref:
      'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260714T090000%0ADTEND:20260715T170000%0ASUMMARY:Annual+Research+and+Innovation+Meeting+2026%0ADESCRIPTION:The+Wave%0AEND:VEVENT%0AEND:VCALENDAR',
  },
};

export const ShortEvent: Story = {
  args: {
    googleCalendarHref:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=House+of+Lords+Alumni+Reception+2026&dates=20260422T190000/20260422T210000&ctz=Europe/London&location=House+of+Lords,+London+SW1A+0PW',
    icalHref:
      'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260422T190000%0ADTEND:20260422T210000%0ASUMMARY:House+of+Lords+Alumni+Reception+2026%0ADESCRIPTION:House+of+Lords%0AEND:VEVENT%0AEND:VCALENDAR',
    outlookHref:
      'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260422T190000%0ADTEND:20260422T210000%0ASUMMARY:House+of+Lords+Alumni+Reception+2026%0ADESCRIPTION:House+of+Lords%0AEND:VEVENT%0AEND:VCALENDAR',
  },
};
