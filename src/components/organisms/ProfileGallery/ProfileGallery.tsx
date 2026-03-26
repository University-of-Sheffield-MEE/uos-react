import { ProfileCard } from '../../molecules/ProfileCard';

interface ProfileItem {
  href: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
  name: string;
  subhead: string;
  subhead2: string;
}

export interface ProfileGalleryProps {
  profiles: ProfileItem[];
}

export function ProfileGallery({ profiles }: ProfileGalleryProps) {
  return (
    <div className="profile-gallery">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          href={profile.href}
          imageSrc={profile.imageSrc}
          imageAlt={profile.imageAlt}
          quote={profile.quote}
          name={profile.name}
          subhead={profile.subhead}
          subhead2={profile.subhead2}
        />
      ))}
    </div>
  );
}
