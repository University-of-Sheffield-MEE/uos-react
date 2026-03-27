import type { Meta, StoryObj } from '@storybook/react';
import { AccredBanner } from '../../components/molecules/AccredBanner';

const meta: Meta<typeof AccredBanner> = {
  title: 'Molecules/AccredBanner',
  component: AccredBanner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Triple Crown accreditation banner for the Management School, displaying a fixed tagline and the three accreditation body logos (AMBA, AACSB, Equis).\n\n[Example page](https://sheffield.ac.uk/management/mba/student-and-alumni-insight/mba-blog-archive/mbas-journey-industry-40-key-takeaways-germanys-tech-leaders)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccredBanner>;

export const Default: Story = {};
