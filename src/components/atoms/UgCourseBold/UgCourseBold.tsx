export interface UgCourseBoldProps {
  year: string;
}

export function UgCourseBold({ year }: UgCourseBoldProps) {
  return (
    <span className="ug-course-full-year ugcoursebold">{year}</span>
  );
}
