import type { Meta, StoryObj } from '@storybook/react';
import { MuseBar } from '../../components/organisms/MuseBar';

const meta: Meta<typeof MuseBar> = {
  title: 'Organisms/MuseBar',
  component: MuseBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'University meta/utility bar containing the MUSE navigation (home icon link) and site search, rendered at the top of every page.\n\n[Example page](https://sheffield.ac.uk/management/mba/student-and-alumni-insight/mba-blog-archive/mbas-journey-industry-40-key-takeaways-germanys-tech-leaders)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MuseBar>;

export const Default: Story = {
  args: {},
};
