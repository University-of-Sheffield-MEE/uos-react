import type { Meta, StoryObj } from '@storybook/react';
import { OtherReqsText } from '../../components/atoms/OtherReqsText';

const meta: Meta<typeof OtherReqsText> = {
  title: 'Atoms/OtherReqsText',
  component: OtherReqsText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OtherReqsText>;

export const Default: Story = {
  args: {
    children: (
      <p>
        Science and technology subjects include Biology/Human Biology, Chemistry, Computer Science,
        Electronics, Environmental Science, Further Maths, Physics and Design &amp; Technology
        (including Textiles, Food Production, Product Design, Systems and Control Technology, and
        Design Engineering)
      </p>
    ),
  },
};

export const ShortNote: Story = {
  args: {
    children: <p>GCSE Maths grade 4/C</p>,
  },
};

export const TLevelNote: Story = {
  args: {
    children: (
      <p>
        Relevant T Level subjects include: Maintenance, Installation &amp; Repair for Engineering
        &amp; Manufacturing; Engineering, Manufacturing, Processing &amp; Control; Digital
        Production, Design &amp; Development; or Design &amp; Development for Engineering &amp;
        Manufacturing
      </p>
    ),
  },
};
