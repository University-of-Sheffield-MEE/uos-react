import type { ReactNode } from 'react';

export interface UosBlockProps {
  variant?: 'grey' | 'dark' | 'highlight';
  children: ReactNode;
}

export function UosBlock({ variant, children }: UosBlockProps) {
  return (
    <div className={`uosblock${variant ? ` ${variant}` : ''}`}>
      {children}
    </div>
  );
}
