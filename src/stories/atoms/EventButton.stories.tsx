import type { Meta, StoryObj } from '@storybook/react';
import { EventButton } from '../../components/atoms/EventButton';

const meta: Meta<typeof EventButton> = {
  title: 'Atoms/EventButton',
  component: EventButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A call-to-action anchor link used on event pages for registration or booking, styled via the .eventbutton container.\n\n[Example page](https://sheffield.ac.uk/ccr/events/ccr-seminar-series-intersecting-trauma-and-justice-violence-against-women-and-families)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventButton>;

export const Default: Story = {
  args: {
    href: 'https://www.tickettailor.com/events/schooloflawuos/1535403',
    label: 'Register here',
  },
};

export const BookTicket: Story = {
  args: {
    href: 'https://www.tickettailor.com/events/wellcomeantiableistresearchcultureuniversityofsheffield/1887023',
    label: 'Book your ticket on TicketTailor',
  },
};

export const JoinOnline: Story = {
  args: {
    href: 'https://teams.microsoft.com/l/meetup-join/example',
    label: 'Link to join online',
  },
};
