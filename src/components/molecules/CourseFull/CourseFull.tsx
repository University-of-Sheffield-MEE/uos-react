import type { ReactNode } from 'react';

export interface CourseFullProps {
  children: ReactNode;
}

export function CourseFull({ children }: CourseFullProps) {
  return (
    <div className="course-full">
      <i className="fas fa-info-circle fa-lg"></i>
      {children}
    </div>
  );
}
