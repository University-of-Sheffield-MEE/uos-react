interface PgCourseImageSource {
  srcSet: string;
  media?: string;
  type?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export interface PgCourseImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sources?: PgCourseImageSource[];
}

export function PgCourseImage({
  src,
  alt,
  width = 375,
  height = 211,
  sources,
}: PgCourseImageProps) {
  return (
    <div className="pg-course-image">
      <div className="media--image--figure">
        <figure className="imgcapt">
          <picture>
            {sources && sources.map((source, index) => (
              <source
                key={index}
                srcSet={source.srcSet}
                media={source.media}
                type={source.type}
                sizes={source.sizes}
                width={source.width}
                height={source.height}
              />
            ))}
            <img
              loading="eager"
              width={width}
              height={height}
              src={src}
              alt={alt}
            />
          </picture>
        </figure>
      </div>
    </div>
  );
}
