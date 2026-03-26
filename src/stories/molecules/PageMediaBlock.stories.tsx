import type { Meta, StoryObj } from '@storybook/react';
import { PageMediaBlock } from '../../components/molecules/PageMediaBlock';

const meta: Meta<typeof PageMediaBlock> = {
  title: 'Molecules/PageMediaBlock',
  component: PageMediaBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageMediaBlock>;

export const Default: Story = {
  args: {
    twoThirds1x: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=rmJWRdwJ 752w',
    twoThirds2x: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=WI6OMzhp 1504w',
    desktopFull1x: 'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=LH22D_-9 1280w',
    desktopFull2x: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2019-05/Germanic%20buildings.jpg.jpeg?itok=2hNTbEQo 2560w',
    tabletTwoThirds1x: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=9p5TA0K0 592w',
    tabletTwoThirds2x: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=-xdhd77y 1184w',
    mobile1x: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=ZOJGjUDu 375w',
    mobile2x: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=7i_hdizC 750w',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-05/Germanic%20buildings.jpg?h=33e35e56&itok=ZOJGjUDu',
    alt: 'Buildings in Germany.',
  },
};

export const WithCaption: Story = {
  args: {
    twoThirds1x: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=iire1_e5 752w',
    twoThirds2x: 'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=JsBAekHD 1504w',
    desktopFull1x: 'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=ArlJFWAg 1280w',
    desktopFull2x: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg.jpeg?itok=vSeB4pYY 2560w',
    tabletTwoThirds1x: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=NUHMxHAu 592w',
    tabletTwoThirds2x: 'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=mDfEHH21 1184w',
    mobile1x: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=QBzvSUct 375w',
    mobile2x: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=bzCvYeFr 750w',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2022-01/conscious-design-3D43SBDDkAc-unsplash.jpg?h=da7ed82d&itok=QBzvSUct',
    alt: 'Person cooking with frying pan',
    caption: 'Photo by Conscious Design on Unsplash',
  },
};
