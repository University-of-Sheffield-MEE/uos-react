import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../components/layouts/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Foundation-based multi-column grid layout providing a multicol wrapper, row container, and responsive column cells using named breakpoint span classes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid>
      <Grid.Row>
        <Grid.Col medium={4}>
          <div>Column 1</div>
        </Grid.Col>
        <Grid.Col medium={4}>
          <div>Column 2</div>
        </Grid.Col>
        <Grid.Col medium={4}>
          <div>Column 3</div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Grid>
      <Grid.Row>
        <Grid.Col medium={6}>
          <div>Column 1</div>
        </Grid.Col>
        <Grid.Col medium={6}>
          <div>Column 2</div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
};

export const ContentWithSidebar: Story = {
  render: () => (
    <Grid>
      <Grid.Row>
        <Grid.Col large={8}>
          <div>Main content</div>
        </Grid.Col>
        <Grid.Col large={4}>
          <div>Sidebar</div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
};

export const MatchHeight: Story = {
  render: () => (
    <Grid>
      <Grid.Row matchHeight>
        <Grid.Col medium={4}>
          <div>Column 1</div>
        </Grid.Col>
        <Grid.Col medium={4}>
          <div>Column 2</div>
        </Grid.Col>
        <Grid.Col medium={4}>
          <div>Column 3</div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
};
