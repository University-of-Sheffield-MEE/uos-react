export interface EventMediaBlockProps {
  srcWide1x: string;
  srcDesktop1x: string;
  srcTablet1x: string;
  srcMobile1x: string;
  imgSrc: string;
  imgAlt: string;
  caption?: string;
}

export function EventMediaBlock({
  srcWide1x,
  srcDesktop1x,
  srcTablet1x,
  srcMobile1x,
  imgSrc,
  imgAlt,
  caption,
}: EventMediaBlockProps) {
  return (
    <div className="block block-layout-builder block-field-blocknodeeventfield-ev-media">
      <div className="media--image--figure">
        <figure className="imgcapt">
          <picture>
            <source media="(min-width: 1280px)" srcSet={srcWide1x} />
            <source media="(min-width: 1024px)" srcSet={srcDesktop1x} />
            <source media="(min-width: 768px)" srcSet={srcTablet1x} />
            <source srcSet={srcMobile1x} />
            <img loading="eager" width={375} height={211} src={imgSrc} alt={imgAlt} />
          </picture>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    </div>
  );
}
