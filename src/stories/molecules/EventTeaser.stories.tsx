import type { Meta, StoryObj } from '@storybook/react';
import { EventTeaser } from '../../components/molecules/EventTeaser';

const meta: Meta<typeof EventTeaser> = {
  title: 'Molecules/EventTeaser',
  component: EventTeaser,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Event listing teaser card showing a thumbnail image, title, date, and venue for a university event.\n\n[Example page](https://sheffield.ac.uk/entrepreneurship/workshops-programmes/how-workshops)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventTeaser>;

export const Default: Story = {
  args: {
    title: 'Business Idea Bootcamp',
    dateText: 'Thursday 13 November 2025',
    venueText: 'The Cornerstone, The University of Sheffield, 2 Whitham Road, Sheffield, S10 2AH',
    thumbnailSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2025-10/Landscape%20posts%20Emerge%20%20%2838%29.jpg?h=e5faf1a1&itok=4Y9jnAul',
    thumbnailAlt: 'A fast track experience to become an entrepreneur 13th November',
  },
};

export const V2WithLink: Story = {
  args: {
    title: 'Coach Cafe: Career Kickstart',
    href: '/alumni/volunteer/coach-cafe-career-kickstart',
    dateText: 'Thursday 7 May 2026, 5:15pm',
    venueText: 'Online - Zoom',
    thumbnailSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2024-06/CoachCafe1%20%282%29.jpg?h=920929c4&itok=J6BXu1BE',
    thumbnailAlt: 'Coach Cafe logo photo',
    v2: true,
  },
};

export const V2WithExternalLink: Story = {
  args: {
    title: 'SMBio 2026 UK & Ireland',
    href: 'https://www.lumicks.com/event/symposium/smbio-uk-2026',
    target: '_blank',
    dateText: 'Wednesday 20 May 2026 at 12:00pm to Thursday 21 May 2026 at 3:00pm',
    venueText: 'The Diamond',
    thumbnailSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-01/SMbio.png.jpg?itok=DwUrB3ws',
    thumbnailAlt: 'Event poster',
    v2: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="event-teaser-list">
      <EventTeaser
        title="HELSI Bites: Are older workers better at managing others' feelings?"
        dateText="Wednesday 8 November 2023"
        venueText="Online Event"
        thumbnailSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2023-03/Older%20workers.png.jpg?itok=u7ORsSUv"
        thumbnailAlt="Older woman sat in a cafe at work"
      />
      <EventTeaser
        title="PGR Migration Conference"
        dateText="Monday 19 June 2023"
        venueText="The Wave, Lecture Theatre 4"
        thumbnailSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2022-12/IMG_0020.JPG.jpg?itok=DcH2CrxR"
        thumbnailAlt="Discussion"
      />
      <EventTeaser
        title="HELSI Bites: Seminar Series 2023"
        dateText="Various, see individual events"
        venueText="Online Event"
        thumbnailSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2021-04/HELSI-bites-generic-banner.png.jpg?itok=Us5W80UL"
        thumbnailAlt="The Healthy Lifespan Institute presents, HELSI bites"
      />
    </div>
  ),
};
