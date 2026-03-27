import type { Meta, StoryObj } from '@storybook/react';
import { StudentProfileIntro } from '../../components/molecules/StudentProfileIntro';

const meta: Meta<typeof StudentProfileIntro> = {
  title: 'Molecules/StudentProfileIntro',
  component: StudentProfileIntro,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Drupal layout builder block displaying a student profile introductory paragraph as part of a student profile page.\n\n[Example page](https://sheffield.ac.uk/cmbe/undergraduate/profiles/bradley)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StudentProfileIntro>;

export const Default: Story = {
  args: {
    intro: 'Isobel is a dual honours undergraduate student, studying Politics and Modern Languages and Cultures',
  },
};

export const LongIntro: Story = {
  args: {
    intro: 'Bradley is a third-year chemical engineering undergraduate student currently spending a year in design & product development at ITM Power as part of his degree - gaining real-world chemical engineering experience.',
  },
};

export const WithLineBreaks: Story = {
  args: {
    intro: 'We have many student societies to choose from. We had a chat with the President of the General Engineering Society \u2013 Romesa Khawaja \u2013 about why they should be your first choice.',
  },
};
