import type { Meta, StoryObj } from '@storybook/react';
import { ProfileText } from '../../components/molecules/ProfileText';

const meta: Meta<typeof ProfileText> = {
  title: 'Molecules/ProfileText',
  component: ProfileText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileText>;

export const Default: Story = {
  render: () => (
    <ProfileText label="Profile" active={true} teachingFocus={false}>
      <p>I am a cognitive psychologist and neuroscientist, interested in selective attention and its connections to perception, as well as expectations, working memory, and consciousness.</p>
    </ProfileText>
  ),
};

export const WithTeachingFocus: Story = {
  render: () => (
    <ProfileText label="Profile" active={true} teachingFocus={true}>
      <h4>Areas of Expertise:</h4>
      <ul>
        <li>Organisational culture and climate</li>
        <li>Cross-cultural behaviour</li>
        <li>Human resource management and performance</li>
      </ul>
    </ProfileText>
  ),
};

export const LongBiography: Story = {
  render: () => (
    <ProfileText label="Profile" active={true} teachingFocus={false}>
      <p>Kevin began his research career at Trinity College Dublin after completing an undergraduate degree in Manufacturing Engineering.</p>
      <p>He was subsequently awarded a scholarship by the Irish Research Council for Science, Engineering and Technology to undertake a PhD.</p>
    </ProfileText>
  ),
};
