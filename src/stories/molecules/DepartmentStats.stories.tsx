import type { Meta, StoryObj } from '@storybook/react';
import { DepartmentStats } from '../../components/molecules/DepartmentStats';

const meta: Meta<typeof DepartmentStats> = {
  title: 'Molecules/DepartmentStats',
  component: DepartmentStats,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A department statistics block displaying a list of achievement statistics, each with a title and source citation, used on undergraduate course pages.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DepartmentStats>;

export const Default: Story = {
  args: {
    stats: [
      {
        title: '95% of our chemistry research is rated as world-leading or internationally excellent',
        source: 'Research Excellence Framework 2021',
      },
    ],
  },
};

export const TwoStats: Story = {
  args: {
    stats: [
      {
        title: '6th in the UK for Chemical Engineering',
        source: 'The Guardian University Guide 2026',
      },
      {
        title: '89% of our students are in employment or further study 15 months after graduation',
        source: 'Graduate Outcomes 2022-23',
      },
    ],
  },
};

export const MultipleStats: Story = {
  args: {
    stats: [
      {
        title: 'A world top-100 university',
        source: 'QS World University Rankings 2026 (92nd)',
      },
      {
        title: 'Number one in the Russell Group (based on aggregate responses)',
        source: 'National Student Survey 2025',
      },
      {
        title: '92 per cent of our research is rated as world-leading or internationally excellent',
        source: 'Research Excellence Framework 2021',
      },
      {
        title: 'University of the Year for Student Experience',
        source: 'The Times and The Sunday Times Good University Guide 2026',
      },
      {
        title: "Number one Students' Union in the UK",
        source: 'Whatuni Student Choice Awards 2024, 2023, 2022, 2020, 2019, 2018, 2017',
      },
      {
        title: "Number one for Students' Union",
        source: 'StudentCrowd 2024 University Awards',
      },
      {
        title: 'A top 20 university targeted by employers',
        source: 'The Graduate Market in 2024, High Fliers report',
      },
    ],
  },
};
