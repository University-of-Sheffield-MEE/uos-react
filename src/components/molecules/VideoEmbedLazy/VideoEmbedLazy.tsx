export interface VideoEmbedLazyProps {
  thumbnailSrc: string;
  embedHtml: string;
  thumbnailAlt?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
}

export function VideoEmbedLazy({
  thumbnailSrc,
  embedHtml,
  thumbnailAlt = '',
  thumbnailWidth = 752,
  thumbnailHeight = 423,
}: VideoEmbedLazyProps) {
  return (
    <div
      className="video-embed-field-lazy"
      data-video-embed-field-lazy={embedHtml}
    >
      <img
        src={thumbnailSrc}
        width={thumbnailWidth}
        height={thumbnailHeight}
        alt={thumbnailAlt}
        loading="lazy"
      />
      <button className="video-embed-field-lazy-play"></button>
    </div>
  );
}
