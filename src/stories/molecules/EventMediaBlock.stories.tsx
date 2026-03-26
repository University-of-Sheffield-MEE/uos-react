import type { Meta, StoryObj } from '@storybook/react';
import { EventMediaBlock } from '../../components/molecules/EventMediaBlock';

const meta: Meta<typeof EventMediaBlock> = {
  title: 'Molecules/EventMediaBlock',
  component: EventMediaBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EventMediaBlock>;

export const Default: Story = {
  args: {
    srcWide1x:
      'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=rcpkzctO 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=GLoWWKLp 1504w',
    srcDesktop1x:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=Kzt0eR8x 1280w, https://cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2019-09/2T5A5748.jpg.jpeg?itok=peRKTmMJ 2560w',
    srcTablet1x:
      'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=AUi-L7Et 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=hByGmz4z 1184w',
    srcMobile1x:
      'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=_JLFXM8l 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=z3X3NGrG 750w',
    imgSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/2T5A5748.jpg?h=425c5a8e&itok=_JLFXM8l',
    imgAlt: 'Dental School building',
  },
};

export const WithCaption: Story = {
  args: {
    srcWide1x:
      'https://sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=BpSMUffM 752w, https://sheffield.ac.uk/sites/default/files/styles/two_thirds_2x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=GCq4rvdM 1504w',
    srcDesktop1x:
      'https://sheffield.ac.uk/sites/default/files/styles/desktop_full_width_1x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=d-RGrHvD 1280w, https://cdn.sheffield.ac.uk/sites/default/files/styles/desktop_full_width_2x/public/2021-04/panel%20right%20size2.jpg.jpeg?itok=Ej241iKU 2560w',
    srcTablet1x:
      'https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_1x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=rsHCEGoY 592w, https://sheffield.ac.uk/sites/default/files/styles/tablet_two_thirds_2x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=oqxace-Z 1184w',
    srcMobile1x:
      'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=T93ELuED 375w, https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_2x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=EEvu5buE 750w',
    imgSrc:
      'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-04/panel%20right%20size2.jpg?h=f8a59649&itok=T93ELuED',
    imgAlt: 'post-pandemic panel',
    caption: 'Image from the post-pandemic panel event',
  },
};
