import type { Meta, StoryObj } from '@storybook/react';
import { JobTitle } from '../../components/atoms/JobTitle';

const meta: Meta<typeof JobTitle> = {
  title: 'Atoms/JobTitle',
  component: JobTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Inline text element displaying a staff member\'s job title within a staff profile or teaser.\n\n[Example page](https://sheffield.ac.uk/spir/research/projects)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof JobTitle>;

export const Default: Story = {
  args: {
    title: 'Chair of International Politics',
  },
};

export const ResearchRole: Story = {
  args: {
    title: 'Postdoctoral Research Associate',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Cross Cutting Chief, Strategic Futures on Resource Sustainability (SCRS)',
  },
};
