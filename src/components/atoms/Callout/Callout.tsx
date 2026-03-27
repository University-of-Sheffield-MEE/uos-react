import type { ReactNode } from 'react';

export interface CalloutProps {
  variant?: 'secondary' | 'primary' | 'success' | 'warning' | 'alert';
  children: ReactNode;
}

export function Callout({ variant = 'secondary', children }: CalloutProps) {
  return <div className={`callout${variant ? ` ${variant}` : ''}`}>{children}</div>;
}
