import type { Meta, StoryObj } from '@storybook/react';
import { EventButton } from '../../components/atoms/EventButton';

const meta: Meta<typeof EventButton> = {
  title: 'Atoms/EventButton',
  component: EventButton,
  tags: ['autodocs'],
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
