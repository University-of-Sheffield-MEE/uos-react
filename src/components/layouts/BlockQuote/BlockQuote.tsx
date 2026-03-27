import type { ReactNode } from 'react';

export interface BlockQuoteProps {
  children: ReactNode;
}

export function BlockQuote({ children }: BlockQuoteProps) {
  return (
    <blockquote>
      {children}
    </blockquote>
  );
}
