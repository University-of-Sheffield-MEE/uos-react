export interface PageMediaBlockProps {
  twoThirds1x: string;
  twoThirds2x: string;
  desktopFull1x: string;
  desktopFull2x: string;
  tabletTwoThirds1x: string;
  tabletTwoThirds2x: string;
  mobile1x: string;
  mobile2x: string;
  src: string;
  alt: string;
  caption?: string;
}

export function PageMediaBlock({
  twoThirds1x,
  twoThirds2x,
  desktopFull1x,
  desktopFull2x,
  tabletTwoThirds1x,
  tabletTwoThirds2x,
  mobile1x,
  mobile2x,
  src,
  alt,
  caption,
}: PageMediaBlockProps) {
  return (
    <div className="block block-layout-builder block-field-blocknodepagefield-b-media">
      <div className="media--image--figure">
        <figure className="imgcapt">
          <picture>
            <source
              srcSet={`${twoThirds1x}, ${twoThirds2x}`}
              media="screen and (min-width: 1280px)"
              type="image/jpeg"
              sizes="min-width(1280px) 60vw, 752px"
              width={1504}
              height={846}
            />
            <source
              srcSet={`${desktopFull1x}, ${desktopFull2x}`}
              media="screen and (min-width: 1024px)"
              type="image/jpeg"
              sizes="min-width(1024px) 67vw, 580px"
              width={2560}
              height={1440}
            />
            <source
              srcSet={`${tabletTwoThirds1x}, ${tabletTwoThirds2x}`}
              media="screen and (min-width: 768px)"
              type="image/jpeg"
              sizes="min-width(768px) 100vw, 752px"
              width={1184}
              height={666}
            />
            <source
              srcSet={`${mobile1x}, ${mobile2x}`}
              type="image/jpeg"
              sizes="100vw"
              width={750}
              height={422}
            />
            <img loading="eager" width={375} height={211} src={src} alt={alt} />
          </picture>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    </div>
  );
}
