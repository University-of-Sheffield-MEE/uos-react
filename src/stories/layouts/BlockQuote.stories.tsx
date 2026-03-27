import type { Meta, StoryObj } from '@storybook/react';
import { BlockQuote } from '../../components/layouts/BlockQuote';

const meta: Meta<typeof BlockQuote> = {
  title: 'Layouts/BlockQuote',
  component: BlockQuote,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A generic blockquote wrapper that applies blockquote styling to arbitrary rich-text content.\n\n[Example page](https://sheffield.ac.uk/postgraduate/taught/courses/2026/international-postgraduate-certificate-education-ipgce-ipgce)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlockQuote>;

export const Default: Story = {
  render: () => (
    <BlockQuote>
      <p>It's very exciting to be able to use our findings, through research, to further/better inform not only our own teaching practice and learning journey, but also to have a positive impact on our work environment, and ultimately our students.</p>
      <p><strong>Matt Green</strong><br />iPGCE Student</p>
    </BlockQuote>
  ),
};

export const SingleParagraph: Story = {
  render: () => (
    <BlockQuote>
      <p>In 1954, her Majesty the Queen visited the University. Both my husband, Harry, and I sang in the chorus in a masque written by Prof. William Empson. A memorable occasion!</p>
    </BlockQuote>
  ),
};

export const WithLink: Story = {
  render: () => (
    <BlockQuote>
      <p><a href="#">'…herd immunity relies on the assumption that an epidemic is best overcome by leaving it unregulated.'</a></p>
    </BlockQuote>
  ),
};
