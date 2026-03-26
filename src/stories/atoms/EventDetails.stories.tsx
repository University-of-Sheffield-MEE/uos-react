import type { Meta, StoryObj } from '@storybook/react';
import { EventDetails } from '../../components/atoms/EventDetails';

const meta: Meta<typeof EventDetails> = {
  title: 'Atoms/EventDetails',
  component: EventDetails,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EventDetails>;

export const Date: Story = {
  args: {
    variant: 'ev-date',
    iconClass: 'fas fa-calendar-alt',
    text: 'Wednesday 11 March 2026, 1:30pm',
  },
};

export const DateRange: Story = {
  args: {
    variant: 'ev-date',
    iconClass: 'fas fa-calendar-alt',
    text: '25 - 27 June 2024',
  },
};

export const Venue: Story = {
  args: {
    variant: 'ev-venue',
    iconClass: 'fas fa-map-marker-alt',
    text: 'University of Sheffield | Broad Lane Black, Lecture Theatre 8',
    ariaLabel: 'Event Venue',
  },
};

export const Group: Story = {
  render: () => (
    <div className="event-meta">
      <EventDetails
        variant="ev-date"
        iconClass="fas fa-calendar-alt"
        text="Wednesday 11 March 2026, 1:30pm"
      />
      <EventDetails
        variant="ev-venue"
        iconClass="fas fa-map-marker-alt"
        text="University of Sheffield | Broad Lane Black, Lecture Theatre 8"
        ariaLabel="Event Venue"
      />
    </div>
  ),
};
