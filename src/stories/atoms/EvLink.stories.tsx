import type { Meta, StoryObj } from '@storybook/react';
import { EvLink } from '../../components/atoms/EvLink';

const meta: Meta<typeof EvLink> = {
  title: 'Atoms/EvLink',
  component: EvLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An event registration link with a Font Awesome ticket icon and an anchor linking to an external booking page.\n\n[Example page](https://sheffield.ac.uk/ihuman/events/waarc-collaborative-projects-online-festival)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvLink>;

export const Default: Story = {
  args: {
    href: 'https://www.tickettailor.com/events/universityofsheffield2/2021956',
    label: 'Register here',
  },
};

export const BookYourPlace: Story = {
  args: {
    href: 'https://onlineshop.shef.ac.uk/conferences-and-events/faculty-of-health/scharr-heds/10th-uk-patient-reported-outcome-measures-proms-research-conference',
    label: 'Book your place now',
  },
};

export const DiscoverMore: Story = {
  args: {
    href: 'https://www.lumicks.com/event/symposium/smbio-uk-2026',
    label: 'Discover more',
  },
};
