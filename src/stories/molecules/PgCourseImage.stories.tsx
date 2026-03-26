import type { Meta, StoryObj } from '@storybook/react';
import { PgCourseImage } from '../../components/molecules/PgCourseImage';

const meta: Meta<typeof PgCourseImage> = {
  title: 'Molecules/PgCourseImage',
  component: PgCourseImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PgCourseImage>;

export const Default: Story = {
  args: {
    src: '//cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-11/DSC03359.jpg?h=c8597094&itok=iVQ9Ogcq',
    alt: 'Student in the lab using a microscope',
    width: 375,
    height: 211,
    sources: [
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2025-11/DSC03359.jpg?h=c8597094&itok=wLAkRisN 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2025-11/DSC03359.jpg?h=c8597094&itok=uiO9dcL1 1504w',
        media: 'screen and (min-width: 1280px)',
        type: 'image/jpeg',
        sizes: 'min-width(1280px) 60vw, 752px',
        width: 1504,
        height: 846,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2025-11/DSC03359.jpg?h=c8597094&itok=4j2jkaR- 1280w, //cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2025-11/DSC03359.jpg.jpeg?itok=usQ4A5QZ 2560w',
        media: 'screen and (min-width: 1024px)',
        type: 'image/jpeg',
        sizes: 'min-width(1024px) 67vw, 580px',
        width: 2560,
        height: 1440,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2025-11/DSC03359.jpg?h=c8597094&itok=NEi0oO00 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2025-11/DSC03359.jpg?h=c8597094&itok=AM0myuvm 1184w',
        media: 'screen and (min-width: 768px)',
        type: 'image/jpeg',
        sizes: 'min-width(768px) 100vw, 752px',
        width: 1184,
        height: 666,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-11/DSC03359.jpg?h=c8597094&itok=iVQ9Ogcq 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2025-11/DSC03359.jpg?h=c8597094&itok=VD78jFVS 750w',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 750,
        height: 422,
      },
    ],
  },
};

export const EducationCourse: Story = {
  args: {
    src: '//cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=pqn9SntN',
    alt: 'Postgraduate education student, Yan Wu',
    width: 375,
    height: 211,
    sources: [
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=A1EX411s 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=czdPo8KC 1504w',
        media: 'screen and (min-width: 1280px)',
        type: 'image/jpeg',
        sizes: 'min-width(1280px) 60vw, 752px',
        width: 1504,
        height: 846,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=6MiGKSsR 1280w, //cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2018-09/Education%20Yan%20Wu_8221.jpg.jpeg?itok=l05RbNQw 2560w',
        media: 'screen and (min-width: 1024px)',
        type: 'image/jpeg',
        sizes: 'min-width(1024px) 67vw, 580px',
        width: 2560,
        height: 1440,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=RiVDuN0O 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=6XThB5PT 1184w',
        media: 'screen and (min-width: 768px)',
        type: 'image/jpeg',
        sizes: 'min-width(768px) 100vw, 752px',
        width: 1184,
        height: 666,
      },
      {
        srcSet: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=pqn9SntN 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2018-09/Education%20Yan%20Wu_8221.jpg?h=eda7c2ba&itok=E_T28Taa 750w',
        type: 'image/jpeg',
        sizes: '100vw',
        width: 750,
        height: 422,
      },
    ],
  },
};

export const WithoutSources: Story = {
  args: {
    src: '//cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2024-08/32948%20%281%29.jpg?h=b8479808&itok=2DsLdEO4',
    alt: 'Student in the lab looking at cells on the screen',
    width: 375,
    height: 211,
  },
};
