import type { ReactNode } from 'react';

export interface ExploreItemProps {
  id: string;
  heading: string;
  children: ReactNode;
}

export function ExploreItem({ id, heading, children }: ExploreItemProps) {
  return (
    <div id={id} className="explore-item">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
