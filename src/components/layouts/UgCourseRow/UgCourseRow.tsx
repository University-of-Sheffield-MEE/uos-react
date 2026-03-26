import type { ReactNode } from 'react';

export interface UgCourseRowProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function UgCourseRow({ sidebar, children }: UgCourseRowProps) {
  return (
    <div className="row ugcourserow">
      <div className="columns large-4">{sidebar}</div>
      <div className="columns large-8">{children}</div>
    </div>
  );
}
