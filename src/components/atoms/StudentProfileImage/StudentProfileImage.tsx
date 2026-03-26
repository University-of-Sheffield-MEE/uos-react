export interface StudentProfileImageProps {
  src: string;
  alt: string;
}

export function StudentProfileImage({ src, alt }: StudentProfileImageProps) {
  return (
    <div className="block block-layout-builder block-field-blocknodestudent-profilefield-stup-profile-image">
      <img loading="eager" width={80} height={80} src={src} alt={alt} />
    </div>
  );
}
