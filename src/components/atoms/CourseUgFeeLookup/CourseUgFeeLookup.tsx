export interface CourseUgFeeLookupProps {
  courseInternalCode: string;
  startYear: number;
}

export function CourseUgFeeLookup({
  courseInternalCode,
  startYear,
}: CourseUgFeeLookupProps) {
  return (
    <div
      className="course-ug-fee-lookup"
      data-course-internal-code={courseInternalCode}
      data-start-year={startYear}
    />
  );
}
