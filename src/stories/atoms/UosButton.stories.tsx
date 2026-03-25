import type { Meta, StoryObj } from '@storybook/react';
import { UosButton } from '../../components/atoms/UosButton';

const meta: Meta<typeof UosButton> = {
  title: 'Atoms/UosButton',
  component: UosButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UosButton>;

export const Default: Story = {
  args: {
    href: '/postgraduate/phd/apply/applying',
    label: 'Apply now',
  },
};

export const WithTitle: Story = {
  args: {
    href: '/management/phd/apply',
    label: 'Find out how to apply',
    title: 'How to apply',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://survey.meatfreedaytoday.com/',
    label: 'Complete the survey',
    title: 'Survey on the meat free day-to-day (Qualtrics)',
  },
};

export const Group: Story = {
  render: () => (
    <div className="buttons">
      <UosButton href="/contact/prospective-students/enquiry-form" label="Send enquiry" />
      <UosButton href="/postgraduate/taught/apply/applying" label="Apply now" title="How to apply" />
    </div>
  ),
};
