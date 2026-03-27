import type { Meta, StoryObj } from '@storybook/react';
import { VideoEmbedLazy } from '../../components/molecules/VideoEmbedLazy';

const meta: Meta<typeof VideoEmbedLazy> = {
  title: 'Molecules/VideoEmbedLazy',
  component: VideoEmbedLazy,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A lazy-loaded video embed that shows a thumbnail image and play button; clicking loads the embedded iframe from a data attribute.\n\n[Example page](https://sheffield.ac.uk/mac/research/groups/structural-engineering)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoEmbedLazy>;

export const Default: Story = {
  args: {
    thumbnailSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/P0Tcvqte6iU.jpg?itok=LPhRMbxi',
    thumbnailAlt: '',
    thumbnailWidth: 752,
    thumbnailHeight: 423,
    embedHtml: '<div class="video-embed-field-provider-YouTube video-embed-field-responsive-video"><iframe width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" title="Civ Eng Our Centenary, Our Research" src="https://www.youtube-nocookie.com/embed/P0Tcvqte6iU?autoplay=1&start=0&rel=0"></iframe></div>',
  },
};

export const Kaltura: Story = {
  args: {
    thumbnailSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/1_dbi9g1s2.jpg?itok=tBL-PT9-',
    thumbnailAlt: '',
    thumbnailWidth: 752,
    thumbnailHeight: 423,
    embedHtml: '<div class="video-embed-field-provider-kaltura video-embed-field-responsive-video"><iframe width="854" height="480" frameborder="0" allowfullscreen="allowfullscreen" title="Chemical Engineering at Sheffield" src="https://cdnapisec.kaltura.com/p/2103181/sp/210318100/embedIframeJs/uiconf_id/38838661/partner_id/2103181?iframeembed=true&playerId=kaltura_player&entry_id=1_dbi9g1s2&wid=1_kzcxrhqg&autoplay=1"></iframe></div>',
  },
};

export const WithAltText: Story = {
  args: {
    thumbnailSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/two_thirds_1x/public/video_thumbnails/UMjoBfveiaw.jpg?itok=hcaMyAtX',
    thumbnailAlt: 'The big city vibe that feels like home. Sheffield has lots to discover.',
    thumbnailWidth: 752,
    thumbnailHeight: 423,
    embedHtml: '<div class="video-embed-field-provider-YouTube video-embed-field-responsive-video"><iframe width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" title="Welcome to your university city" src="https://www.youtube-nocookie.com/embed/UMjoBfveiaw?autoplay=1&start=0&rel=0"></iframe></div>',
  },
};
