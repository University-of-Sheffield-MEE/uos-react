import type { Meta, StoryObj } from '@storybook/react';
import { LearningText } from '../../components/molecules/LearningText';

const meta: Meta<typeof LearningText> = {
  title: 'Molecules/LearningText',
  component: LearningText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LearningText>;

export const Default: Story = {
  render: () => (
    <LearningText>
      <p>Our teaching puts engineering practice at its core with integrated laboratory activities, computer modelling and simulations, and hands-on activities in our state-of-the art pilot plant all supporting your lectures and tutorials.</p>
    </LearningText>
  ),
};

export const MultiParagraph: Story = {
  render: () => (
    <LearningText>
      <p>Learning will be delivered through a combination of lectures, practical labs and tutorials as well as independent study that is supported by problem classes.</p>
      <p>In your first and second year all your labs will be held in The Diamond, where you'll use our large Electronics and Control Lab, Electrical Machines Room and have lab sessions in the dedicated teaching Cleanroom.</p>
      <p>In the third year, you'll carry out your own research project, supervised by an academic.</p>
    </LearningText>
  ),
};

export const WithList: Story = {
  render: () => (
    <LearningText>
      <p>We take a practical 'learn by doing' approach which puts engineering practice at its core.</p>
      <ul>
        <li>lectures and tutorials: to build your core knowledge</li>
        <li>practical lab sessions and design classes: hands-on activities in our state-of-the-art facilities</li>
        <li>computer modelling and simulation: using industry-standard software</li>
        <li>project work: where you will learn important group work skills</li>
      </ul>
    </LearningText>
  ),
};
