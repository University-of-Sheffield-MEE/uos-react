import type { Meta, StoryObj } from '@storybook/react';
import { UosQuote } from '../../components/atoms/UosQuote';

const meta: Meta<typeof UosQuote> = {
  title: 'Atoms/UosQuote',
  component: UosQuote,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled pull-quote blockquote with an optional speaker name and attribution line, used throughout news and content pages.\n\n[Example page](https://sheffield.ac.uk/biosciences/news/new-insights-plant-defence-and-adaptation)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UosQuote>;

export const Default: Story = {
  args: {
    quote:
      'More research into the molecular mechanisms by which biosynthetic gene clusters respond to environment stress and shape the soil microbiome could direct future breeding programmes.',
    name: 'Professor Jurriaan Ton',
    attribution: 'Professor of Plant Environmental Signalling',
  },
};

export const QuoteOnly: Story = {
  args: {
    quote:
      'There has been a lot of dialogue about the situation, but what we need now is action. Act with hope, act without hope—but act.',
  },
};

export const WithNameNoAttribution: Story = {
  args: {
    quote:
      'The tasks were varied and engaging, encouraging us to think about our own practice and experience as educators, and beyond.',
    name: 'Former DELTA candidate',
  },
};

export const Group: Story = {
  render: () => (
    <div>
      <UosQuote
        quote="It's really given me an insight into industry professionals and their use of Artificial Intelligence."
        name="Ahmed Alyafeai"
        attribution="Financial Management student"
      />
      <UosQuote
        quote="For our part, we know that many older adults view sexual activity, intimacy, and identity as an integral part of their lives."
        name="Professor Sharron Hinchliff"
        attribution="Professor of Psychology and Health at the School of Allied Health Professions, Nursing and Midwifery"
      />
    </div>
  ),
};
