import { TeaserThumb } from '../../atoms/TeaserThumb';

export interface SpTeaserProps {
  imageSrc: string;
  imageAlt: string;
  href: string;
  title: string;
  studentName: string;
  studentCourse: string;
  description?: string;
}

export function SpTeaser({
  imageSrc,
  imageAlt,
  href,
  title,
  studentName,
  studentCourse,
  description,
}: SpTeaserProps) {
  return (
    <div className="sp-teaser">
      <TeaserThumb src={imageSrc} alt={imageAlt} />
      <div className="teaser-text">
        <h3><a href={href}>{title}</a></h3>
        <span className="student-profile-name">{studentName}</span><span className="student-profile-course">{studentCourse}</span>
        <br />
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
