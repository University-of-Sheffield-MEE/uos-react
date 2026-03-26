import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedNews } from '../../components/organisms/FeaturedNews';

const meta: Meta<typeof FeaturedNews> = {
  title: 'Organisms/FeaturedNews',
  component: FeaturedNews,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedNews>;

export const Default: Story = {
  args: {
    isPara: true,
    sectionTitle: 'News',
    featuredCard: {
      href: '/english/news/school-english-linguist-recognised-international-tesol-research-award',
      ariaLabel: 'School of English linguist recognised with international TESOL research award',
      imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-03/1N4A3468-2.jpg',
      imageAlt: 'Beatriz Gonzalez-Fernandez staff photo',
      title: 'School of English linguist recognised with international TESOL research award',
      description:
        'Dr Beatriz Gonzalez-Fernandez has received the TESOL Award for Excellence in Research, recognising her internationally significant contributions to understanding how additional languages are learned and used.',
      date: '25 March 2026',
      dateTime: '2026-03-25T17:43:57+00:00',
    },
    secondaryCards: [
      {
        href: '/english/news/multispecies-mutualisms-project-launches-interdisciplinary-workshop-sheffield',
        ariaLabel:
          'Multispecies Mutualisms project launches with interdisciplinary workshop at Sheffield',
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-04/IMG_1935.jpeg.jpg',
        imageAlt: 'Four people stood smiling for the camera',
        title:
          'Multispecies Mutualisms project launches with interdisciplinary workshop at Sheffield',
        description:
          'A new Wellcome-funded research project exploring the complex relationships between humans and other species has launched at the University of Sheffield.',
        date: '12 March 2026',
        dateTime: '2026-03-12T13:59:02+00:00',
      },
      {
        href: 'https://sheffield.ac.uk/news/ey-ai-landmark-study-helps-ai-better-understand-accents-and-dialects',
        ariaLabel: 'Ey up, AI! Landmark study helps AI better understand accents and dialects',
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-02/GettyImages-2253332749.jpg',
        imageAlt: 'A close up shot of a man in a suit holding his phone',
        title: 'Ey up, AI! Landmark study helps AI better understand accents and dialects',
        description:
          'AI could soon better understand people\'s accent and dialect, thanks to a landmark study being led by the University of Sheffield.',
        date: '24 February 2026',
        dateTime: '2026-02-24T10:02:37+00:00',
      },
      {
        href: '/english/news/report-led-prof-joanna-gavins-discovers-language-barrier-stalling-uk-sustainability-efforts',
        ariaLabel:
          'Report led by Prof. Joanna Gavins discovers language barrier stalling UK sustainability efforts',
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-01/AdobeStock_220990134.jpeg.jpg',
        imageAlt: 'a large pile of crushed up water bottles',
        title:
          'Report led by Prof. Joanna Gavins discovers language barrier stalling UK sustainability efforts',
        description:
          'A new study led by Professor Joanna Gavins has discovered that failures in language and communication are undermining progress.',
        date: '15 January 2026',
        dateTime: '2026-01-15T16:37:13+00:00',
      },
    ],
    viewAllLink: { href: '/english/news', label: 'View all English news' },
  },
};

export const RecentMode: Story = {
  args: {
    isRecent: true,
    featuredCard: {
      href: '/engineering/news/university-sheffield-lead-ps125m-national-centre-next-generation-semiconductor-systems',
      ariaLabel:
        'University of Sheffield to lead £12.5m national centre for next-generation semiconductor systems',
      imageSrc:
        'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2023-05/AdobeStock_51490712.jpeg.jpg',
      imageAlt: 'Stock image representing semiconductor technology',
      title:
        'University of Sheffield to lead £12.5m national centre for next-generation semiconductor systems',
      description:
        'The University of Sheffield is leading a new £12.5 million national research centre to strengthen the UK\'s ability to design the next generation of advanced electronic systems.',
      date: '13 March 2026',
      dateTime: '2026-03-13T00:00:00+00:00',
    },
    secondaryCards: [
      {
        href: 'https://sheffield.ac.uk/eee/news/advanced-virtual-simulations-set-reshape-care-patients-multiple-long-term-conditions',
        ariaLabel:
          'Advanced virtual simulations set to reshape care for patients with multiple long-term conditions',
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-03/AdobeStock_1543183611.jpeg.jpg',
        imageAlt: 'Man struggling with a long term health condition',
        title:
          'Advanced virtual simulations set to reshape care for patients with multiple long-term conditions',
        date: '12 March 2026',
        dateTime: '2026-03-12T00:00:00+00:00',
      },
      {
        href: 'https://sheffield.ac.uk/news/watch-home-built-10-days-sheffields-factory-box-demonstrates-solution-housing-crisis',
        ariaLabel:
          "Watch a home built in 10 days as Sheffield's factory-in-a-box demonstrates a solution",
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-02/3D9A9841.jpg',
        imageAlt: 'Factory-in-a-box Industrialised Construction demonstrator',
        title:
          "Watch a home built in 10 days as Sheffield's 'factory-in-a-box' demonstrates a solution to the housing crisis",
        date: '2 March 2026',
        dateTime: '2026-03-02T09:00:00+00:00',
      },
      {
        href: '/engineering/news/university-sheffield-appoints-chair-fusion-technology',
        ariaLabel: 'University of Sheffield appoints Chair of Fusion Technology',
        imageSrc:
          'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-03/Shuisheng_057.jpg',
        imageAlt: 'Professor Shuisheng He',
        title: 'University of Sheffield appoints Chair of Fusion Technology',
        date: '2 March 2026',
        dateTime: '2026-03-02T00:00:00+00:00',
      },
    ],
  },
};
