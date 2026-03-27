import type { Meta, StoryObj } from '@storybook/react';
import { HubHeader } from '../../components/molecules/HubHeader';

const meta: Meta<typeof HubHeader> = {
  title: 'Molecules/HubHeader',
  component: HubHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A hub page header banner containing a page title and a lead introduction paragraph.\n\n[Example page](https://sheffield.ac.uk/international/after-you-apply/undergraduate)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HubHeader>;

export const Default: Story = {
  args: {
    title: 'Undergraduate',
    intro: 'What happens after you apply for undergraduate study.',
    fullWidth: true,
  },
};

export const LongIntro: Story = {
  args: {
    title: 'Our careers and employability support',
    intro: 'You will be supported by our dedicated employability team from the day you arrive in Sheffield as a student, through your degree, and into your future career as you become part of our alumni community. We will be here to support you for as long as you need us.',
    fullWidth: true,
  },
};

export const NoIntro: Story = {
  args: {
    title: 'Healthcare apprenticeships',
    fullWidth: true,
  },
};

export const WithoutFullWidth: Story = {
  args: {
    title: 'Thesis preparation',
    intro: 'Key guidance and protocols to follow when preparing your doctoral thesis.',
    fullWidth: false,
  },
};
