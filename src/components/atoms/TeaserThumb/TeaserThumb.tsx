export interface TeaserThumbProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: string;
  figcaption?: string;
  usePicture?: boolean;
}

export function TeaserThumb({
  src,
  alt,
  width = 256,
  height = 144,
  loading = 'lazy',
  figcaption,
  usePicture = false,
}: TeaserThumbProps) {
  return (
    <div className="teaser-thumb">
      {usePicture ? (
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <img
                loading={loading as 'lazy' | 'eager' | undefined}
                width={width}
                height={height}
                src={src}
                alt={alt}
              />
            </picture>
            {figcaption && <figcaption>{figcaption}</figcaption>}
          </figure>
        </div>
      ) : (
        <img
          loading={loading as 'lazy' | 'eager' | undefined}
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </div>
  );
}
