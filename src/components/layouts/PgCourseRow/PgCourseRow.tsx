import type { ReactNode } from 'react';

export interface PgCourseRowProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function PgCourseRow({ sidebar, children }: PgCourseRowProps) {
  return (
    <div className="row pgcourserow">
      <div className="columns large-4">
        {sidebar}
      </div>
      <div className="columns large-8">
        {children}
      </div>
    </div>
  );
}
