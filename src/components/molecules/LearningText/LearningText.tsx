import type { ReactNode } from 'react';

export interface LearningTextProps {
  children: ReactNode;
}

export function LearningText({ children }: LearningTextProps) {
  return (
    <div className="learningtext">
      <h3>Learning</h3>
      {children}
    </div>
  );
}
