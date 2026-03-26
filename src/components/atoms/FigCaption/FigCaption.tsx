import type { ReactNode } from 'react';

export interface FigCaptionProps {
  children: ReactNode;
}

export function FigCaption({ children }: FigCaptionProps) {
  return <figcaption>{children}</figcaption>;
}
