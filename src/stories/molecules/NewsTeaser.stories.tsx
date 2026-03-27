import type { Meta, StoryObj } from '@storybook/react';
import { NewsTeaser } from '../../components/molecules/NewsTeaser';

const meta: Meta<typeof NewsTeaser> = {
  title: 'Molecules/NewsTeaser',
  component: NewsTeaser,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A clickable news article teaser card showing a thumbnail image, headline, summary text, publication date, and optional news source attribution.\n\n[Example page](https://sheffield.ac.uk/healthy-lifespan/research/developing-interventions/healthy-people-healthy-places)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsTeaser>;

export const Default: Story = {
  args: {
    href: '/healthy-lifespan/news/new-research-reveals-link-between-air-pollution-and-water-quality',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2024-12/2509_6028bda06741893.jpg',
    imageAlt: 'women walking outside by the canal',
    title: 'New research reveals link between air pollution and water quality and people having multiple long term chronic conditions',
    summary: 'Research from the Healthy Lifespan Institute has identified a new link between air pollution and water quality with multimorbidity.',
    date: '3 December 2024',
    dateTime: '2024-12-03T14:56:57+00:00',
  },
};

export const NoImage: Story = {
  args: {
    href: '/greenbrain/news/green-brain-discovery-night',
    title: 'Green Brain at Discovery Night for the Kick off of British Science Week',
    summary: 'The Green Brain team hosted the "Bee-Hind a Bee Mind" booth for a second time at Discovery Night.',
    date: '9 March 2016',
    dateTime: '2016-03-09T00:00:00+00:00',
  },
};

export const WithNewsSrc: Story = {
  args: {
    href: '/cancer/news/take-part-research-study-scans',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2021-04/survey-1594962_1920.jpg',
    imageAlt: 'survey',
    title: 'Take part in a research study on scans and scanxiety experiences of adults with mesothelioma, pancreatic, brain and liver cancer',
    summary: 'The online survey to gain insights to the experiences of scans for adults with mesothelioma, pancreatic, brain and liver cancer is now open.',
    date: '13 January 2026',
    dateTime: '2026-01-13T00:00:00+00:00',
    newsSrc: '| Published by the BBC',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.sheffield.ac.uk/discoverynight',
    target: '_blank',
    title: 'Green Brain at Discovery Night for the Kick off of British Science Week',
    summary: 'The Green Brain team hosted the "Bee-Hind a Bee Mind" booth for a second time at Discovery Night.',
    date: '9 March 2016',
    dateTime: '2016-03-09T00:00:00+00:00',
  },
};

export const Group: Story = {
  render: () => (
    <div className="view-content">
      <NewsTeaser
        href="/english/news/funded-phd-opportunities-school-english"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2019-04/29415.jpg"
        imageAlt="PhD students working together at computer"
        title="Funded PhD Opportunities in the School of English"
        summary="The School of English at the University of Sheffield is pleased to advertise three PhD projects funded by the Champernowne Trust and the bequest of Sheffield theatre director Geoffrey Ost."
        date="12 December 2025"
        dateTime="2025-12-12T16:08:42+00:00"
      />
      <NewsTeaser
        href="/news/bedroom-boardroom-enterprising-student-duo-set-thriving-sheffield-business"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2026-02/Group_4K_H.jpg"
        imageAlt="(LtoR) Founders Edward George and William Toms"
        title="From bedroom to boardroom: enterprising student duo set up thriving Sheffield business"
        summary="An entrepreneurial student duo has built their fledgling engineering firm from a bedroom startup to a full-scale city centre operation."
        date="18 February 2026"
        dateTime="2026-02-18T11:24:59+00:00"
      />
      <NewsTeaser
        href="/dutch/news/dont-shy-away-difficult-topics"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2023-10/IMG_1192.jpg"
        imageAlt="Two young women smiling at the camera standing in front of a nature poster"
        title={`"Don't shy away from difficult topics"`}
        summary="Congratulations to Beth Tasker and Sophie Moss, winners of the Anglo-Netherlands Society Annual Award 2023."
        date="31 October 2023"
        dateTime="2023-10-31T00:31:55+00:00"
      />
    </div>
  ),
};
