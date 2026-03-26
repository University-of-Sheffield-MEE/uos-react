import type { Meta, StoryObj } from '@storybook/react';
import { CourseStats } from '../../components/molecules/CourseStats';

const meta: Meta<typeof CourseStats> = {
  title: 'Molecules/CourseStats',
  component: CourseStats,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CourseStats>;

export const Default: Story = {
  args: {
    heading: 'Why study this course?',
    stats: [
      {
        iconClass: 'fas fa-star',
        title: 'Top 20 in the UK for Chemistry',
        description: 'The Times and Sunday Times Good University Guide 2026',
      },
      {
        iconClass: 'fas fa-star',
        title: '1st in the Russell Group for learning opportunities, student voice, and assessment and feedback in chemistry',
        description: 'National Student Survey 2025',
      },
      {
        iconClass: 'fas fa-star',
        title: 'Royal Society of Chemistry (RSC) accredited course',
        description: 'This course is accredited by the RSC for fully meeting the academic criteria for Chartered Chemist (CChem).',
      },
      {
        iconClass: 'fas fa-star',
        title: 'Opt to spend a full year on an industrial work placement',
        description: 'Test out a career path, build up your CV and grow your network of contacts.',
      },
    ],
  },
};

export const LongDescriptions: Story = {
  args: {
    heading: 'Why study this course?',
    stats: [
      {
        iconClass: 'fas fa-star',
        title: 'Learn from experts in the field',
        description: "You'll be taught by academics who are at the forefront of their fields, contributing to cutting-edge research that shapes the future of chemical engineering.",
      },
      {
        iconClass: 'fas fa-star',
        title: 'World-class facilities, practical training',
        description: 'Gain invaluable experience using industrial-scale equipment in energy, pharmaceutical, and biological engineering.',
      },
      {
        iconClass: 'fas fa-star',
        title: 'Our graduates work in leading chemical engineering roles',
        description: 'Our course is designed with your future in mind, with employability embedded at every stage.',
      },
    ],
  },
};
