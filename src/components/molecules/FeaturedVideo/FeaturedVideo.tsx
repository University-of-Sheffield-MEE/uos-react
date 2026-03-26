import type { ReactNode } from 'react';
import { VideoEmbedLazy } from '../../molecules/VideoEmbedLazy';
import { FieldMultiTitle } from '../../atoms/FieldMultiTitle';

export interface FeaturedVideoProps {
  sectionTitle?: string;
  videoThumbnailSrc: string;
  videoTitle: string;
  figureCaption?: string;
  heading?: string;
  description?: ReactNode;
  featTitle?: string;
  linkHref?: string;
}

export function FeaturedVideo({
  sectionTitle,
  videoThumbnailSrc,
  videoTitle,
  figureCaption,
  heading,
  description,
  featTitle,
  linkHref,
}: FeaturedVideoProps) {
  const descriptContent = (
    <div className="descripttext">
      {heading && <h3>{heading}</h3>}
      {description}
      {featTitle && <p className="feat-title">{featTitle}</p>}
    </div>
  );

  const vidDescript = linkHref ? (
    <a className="feat-vid-link" href={linkHref}>
      <div className="vid_descript">
        {descriptContent}
        <div className="link-arrow">
          <div className="fmarrow"><i className="fas fa-sm fa-arrow-right"></i></div>
        </div>
      </div>
    </a>
  ) : (
    <div className="vid_descript">
      {descriptContent}
    </div>
  );

  const innerBlock = (
    <div className="featured-video">
      <div className="media--video-embed">
        {/* eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role */}
        <figure className="imgcapt">
          <VideoEmbedLazy
            thumbnailSrc={videoThumbnailSrc}
            embedHtml=""
            thumbnailAlt={videoTitle}
          />
          {figureCaption && <figcaption>{figureCaption}</figcaption>}
        </figure>
      </div>
      {vidDescript}
    </div>
  );

  if (sectionTitle) {
    return (
      <div className="paragraph paragraph--type--featured-video paragraph--view-mode--default">
        <FieldMultiTitle text={sectionTitle} />
        {innerBlock}
      </div>
    );
  }

  return (
    <div className="paragraph paragraph--type--featured-video paragraph--view-mode--default">
      {innerBlock}
    </div>
  );
}
