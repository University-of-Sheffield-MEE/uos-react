export interface ProfilePicModalProps {
  src: string;
  alt: string;
  onClose?: () => void;
}

export function ProfilePicModal({ src, alt, onClose }: ProfilePicModalProps) {
  return (
    <div className="profilepic-modal">
      <button className="close" aria-label="Close image modal" onClick={onClose}>
        <i className="fas fa-times-circle"></i>
      </button>
      <picture>
        <img
          {...{ responsive: '' }}
          width={600}
          height={600}
          src={src}
          alt={alt}
          loading="lazy"
        />
      </picture>
    </div>
  );
}
