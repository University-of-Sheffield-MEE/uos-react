export interface NewsArticleMediaBlockProps {
  srcWide1x: string;
  srcDesktop1x: string;
  srcTablet1x: string;
  srcMobile1x: string;
  imgSrc: string;
  imgAlt: string;
  caption?: string;
}

export function NewsArticleMediaBlock({
  srcWide1x,
  srcDesktop1x,
  srcTablet1x,
  srcMobile1x,
  imgSrc,
  imgAlt,
  caption,
}: NewsArticleMediaBlockProps) {
  return (
    <section className="block block-layout-builder block-field-blocknodenews-articlefield-n-media">
      <div className="media--image--figure">
        <figure className="imgcapt">
          <picture>
            <source
              srcSet={srcWide1x}
              media="screen and (min-width: 1280px)"
              type="image/jpeg"
              sizes="min-width(1280px) 60vw, 752px"
              width={1504}
              height={846}
            />
            <source
              srcSet={srcDesktop1x}
              media="screen and (min-width: 1024px)"
              type="image/jpeg"
              sizes="min-width(1024px) 67vw, 580px"
              width={2560}
              height={1440}
            />
            <source
              srcSet={srcTablet1x}
              media="screen and (min-width: 768px)"
              type="image/jpeg"
              sizes="min-width(768px) 100vw, 752px"
              width={1184}
              height={666}
            />
            <source
              srcSet={srcMobile1x}
              type="image/jpeg"
              sizes="100vw"
              width={750}
              height={422}
            />
            <img
              loading="eager"
              width={375}
              height={211}
              src={imgSrc}
              alt={imgAlt}
            />
          </picture>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
