import type { Meta, StoryObj } from '@storybook/react';
import { ParaMediaBox } from '../../components/molecules/ParaMediaBox';

const meta: Meta<typeof ParaMediaBox> = {
  title: 'Molecules/ParaMediaBox',
  component: ParaMediaBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Drupal paragraph media-box block that combines an optional heading, a media item (image or video embed), and optional body text content.\n\n[Example page](https://sheffield.ac.uk/management/mba/upcoming-mba-events)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ParaMediaBox>;

export const Default: Story = {
  args: {
    media: (
      <figure className="imgcapt">
        <picture>
          <img
            src="https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2020-07/15450.jpg"
            alt="Crucible"
            width={375}
            height={211}
          />
        </picture>
      </figure>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Meet our students',
    media: <p>[video embed placeholder]</p>,
  },
};

export const WithTitleAndBody: Story = {
  args: {
    title: 'Amanda Jones',
    media: <p>[image placeholder]</p>,
    children: (
      <p>
        Amanda has the rare disease Tracheobronchomalacia. She works hard advocating for disability
        in a variety of ways.
      </p>
    ),
  },
};

export const WithBodyOnly: Story = {
  args: {
    media: <p>[image placeholder]</p>,
    children: <p>Mona Siddiqui in conversation with Professor Henk de Burg</p>,
  },
};
