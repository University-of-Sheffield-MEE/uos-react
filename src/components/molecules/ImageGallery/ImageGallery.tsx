export interface ImageGalleryProps {
  imageSrc: string;
  imageAlt: string;
  figcaption?: string;
  title?: string;
  description?: string;
  imageCount: number;
  onViewAll?: () => void;
}

export function ImageGallery({
  imageSrc,
  imageAlt,
  figcaption,
  title,
  description,
  imageCount,
  onViewAll,
}: ImageGalleryProps) {
  return (
    <div className="image-gallery">
      <div className="image-gallery__image">
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <img loading="eager" width="375" height="211" src={imageSrc} alt={imageAlt} />
            </picture>
            {figcaption && <figcaption>{figcaption}</figcaption>}
          </figure>
        </div>
      </div>
      <div className="image-gallery__content">
        {title && <h2>{title}</h2>}
        {description && <p className="description">{description}</p>}
        <button
          className="image-gallery__view-all"
          data-gallery-trigger="true"
          aria-label={`View all ${imageCount} images`}
          onClick={onViewAll}
        >
          <i className="fas fa-images"></i> View all {imageCount} images
        </button>
      </div>
    </div>
  );
}
