import type { ReactNode } from 'react';

export interface LeadIntroProps {
  children: ReactNode;
}

export function LeadIntro({ children }: LeadIntroProps) {
  return <p className="leadintro">{children}</p>;
}
