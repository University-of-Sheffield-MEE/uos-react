interface LpHeaderImgSource {
  srcSet: string;
  media?: string;
  type?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export interface LpHeaderImgProps {
  src: string;
  alt: string;
  sources?: LpHeaderImgSource[];
  width?: number;
  height?: number;
}

export function LpHeaderImg({
  src,
  alt,
  sources = [],
  width,
  height,
}: LpHeaderImgProps) {
  return (
    <div className="lpheaderimg">
      <div className="media--image--figure">
        <figure className="imgcapt">
          <picture>
            {sources.map((source, index) => (
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
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </picture>
        </figure>
      </div>
    </div>
  );
}
