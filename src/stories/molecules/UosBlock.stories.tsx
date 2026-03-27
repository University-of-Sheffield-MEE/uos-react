import type { Meta, StoryObj } from '@storybook/react';
import { UosBlock } from '../../components/molecules/UosBlock';

const meta: Meta<typeof UosBlock> = {
  title: 'Molecules/UosBlock',
  component: UosBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A themed content block that wraps arbitrary CMS-driven content with optional colour variants (grey, dark, highlight) and an optional inner content wrapper.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UosBlock>;

export const Default: Story = {
  render: () => (
    <UosBlock>
      <h2>What are the UN sustainable development goals?</h2>
      <p>The global population is growing, placing increasing demand on the world's finite resources and exacerbating the climate crisis.</p>
    </UosBlock>
  ),
};

export const Grey: Story = {
  render: () => (
    <UosBlock variant="grey">
      <div className="uosblock-content">
        <h2>On this page:</h2>
        <ul>
          <li><a href="#description">Module description</a></li>
          <li><a href="#objectives">Objectives</a></li>
          <li><a href="#teaching">Teaching</a></li>
        </ul>
      </div>
    </UosBlock>
  ),
};

export const Dark: Story = {
  render: () => (
    <UosBlock variant="dark">
      <h2>Research strategy</h2>
      <p>New molecules have been detected and studied using microwave and photoelectron spectroscopy techniques.</p>
    </UosBlock>
  ),
};

export const Highlight: Story = {
  render: () => (
    <UosBlock variant="highlight">
      <h2>Main contributions</h2>
      <ul>
        <li>The development of new fields of chemistry</li>
        <li>The discovery of C60 Buckminsterfullerene</li>
        <li>Isolation and characterisation of C60 and C70</li>
      </ul>
    </UosBlock>
  ),
};
