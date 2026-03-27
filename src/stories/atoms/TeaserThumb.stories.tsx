import type { Meta, StoryObj } from '@storybook/react';
import { TeaserThumb } from '../../components/atoms/TeaserThumb';

const meta: Meta<typeof TeaserThumb> = {
  title: 'Atoms/TeaserThumb',
  component: TeaserThumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A thumbnail image container used within teaser components, accepting either a simple image or a responsive picture element.\n\n[Example page](https://sheffield.ac.uk/english/news)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TeaserThumb>;

export const Default: Story = {
  args: {
    src: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2019-04/29415.jpg',
    alt: 'PhD students working together at computer',
    width: 256,
    height: 144,
    loading: 'lazy',
  },
};

export const WithFigure: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2026-01/SMbio.png.jpg',
    alt: 'Event poster',
    width: 375,
    height: 211,
    loading: 'eager',
    usePicture: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="views-element-container">
      <TeaserThumb
        src="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2026-01/CJR_Damian-Shepherd_03-Edit%20-%20Damian%20Shepherd.jpg"
        alt="Student Damian Shepherd in front of a blurred building"
        width={256}
        height={144}
        loading="lazy"
      />
      <TeaserThumb
        src="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2026-01/c1f2c23a-7e65-4445-b205-d5f1ea8fcd22.JPG.jpg"
        alt="An general engineering alumnus is standing on the rail with his Network Rail uniform"
        width={256}
        height={144}
        loading="lazy"
      />
      <TeaserThumb
        src="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2024-12/2509_6028bda06741893.jpg"
        alt="Women walking outside by the canal"
        width={256}
        height={144}
        loading="lazy"
      />
    </div>
  ),
};
