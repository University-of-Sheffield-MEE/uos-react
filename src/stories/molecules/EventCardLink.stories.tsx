import type { Meta, StoryObj } from '@storybook/react';
import { EventCardLink } from '../../components/molecules/EventCardLink';

const meta: Meta<typeof EventCardLink> = {
  title: 'Molecules/EventCardLink',
  component: EventCardLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An event promotional card with a linked image, title, date, optional time, and venue details, with an arrow link affordance.\n\n[Example page](https://sheffield.ac.uk/entrepreneurship/news/19-student-start-ups-pitch-dragons-den-style-showcase-final-0)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventCardLink>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_half_width_2x/public/2022-11/high-level-rack-g219de060a_1920.jpg',
    imageAlt: 'A warehouse with shelves full of cardboard boxes.',
    href: '/cdw/research/international-labour-and-logistics-research-network/illrn-black-friday-international-debrief',
    title: 'ILLRN: Black Friday International Debrief',
    linkTitle: 'ILLRN: Black Friday International Debrief',
    date: 'Monday 5 December 2022',
    time: '5:00pm',
    venue: 'Online event',
    venueCombinedWithDate: false,
    showArrowInTitle: false,
  },
};

export const WithArrowInTitle: Story = {
  args: {
    imageSrc:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_half_width_2x/public/2025-05/1746785822668.jpg',
    imageAlt: 'Large audience viewing presentation in grand room',
    href: '/entrepreneurship/workshops-programmes/awards-showcase-2025',
    title: 'Awards Showcase 2026',
    linkTitle: 'Awards Showcase 2026',
    date: 'Thursday 14 May 2026, 1:00pm',
    venue: 'Mappin Hall, The University of Sheffield, Mappin Street, Sheffield, S1 3JD',
    venueCombinedWithDate: true,
    showArrowInTitle: true,
  },
};

export const WithTimeAndVenue: Story = {
  args: {
    imageSrc:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_half_width_2x/public/2021-03/SocSimFesT2021_0.png.jpg',
    imageAlt: 'The MBSSM agent-based modelling software architecture: a hands-on tutorial',
    href: '/cascade/events/socsimfest',
    title: 'SocSimFest',
    linkTitle: 'SocSimFest',
    date: 'Friday 19 March 2021',
    time: '11:00am',
    venue: 'Online event',
    venueCombinedWithDate: false,
    showArrowInTitle: false,
  },
};

export const Group: Story = {
  render: () => (
    <div className="event-card-group">
      <EventCardLink
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/desktop_half_width_2x/public/2023-02/translationalresearch.jpg"
        imageAlt="Scientist at the lab bench"
        href="/cancer/events/rare-cancers-network-meeting"
        title="Rare cancers network meeting"
        linkTitle="Rare cancers network meeting"
        date="Wednesday 22 April 2026, 9:00am"
        venue="Western Bank Villas, The University of Sheffield, 300-302 Western Bank, Sheffield, S10 2TN"
        venueCombinedWithDate={true}
        showArrowInTitle={true}
      />
      <EventCardLink
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/desktop_half_width_2x/public/2023-05/conference-image_1.jpg"
        imageAlt="Workshop poster session"
        href="/nearfield-optical-spectroscopy/second-international-workshop-2024"
        title="Second International Workshop on 'Near-field Optical Imaging and Spectroscopy' 2024"
        linkTitle="Second International Workshop on 'Near-field Optical Imaging and Spectroscopy' 2024"
        date="11/09/2024 (optional demonstration) - 12/09/2024 (full day workshop)"
        venue="University of Sheffield, UK"
        venueCombinedWithDate={false}
        showArrowInTitle={false}
      />
    </div>
  ),
};
