import type { ReactNode } from 'react';

export interface BlockAlertbannerProps {
  children?: ReactNode;
}

export function BlockAlertbanner({ children }: BlockAlertbannerProps) {
  return (
    <section
      id="block-alertbanner"
      className="block-alertbanner block block-fixed-block-content block-fixed-block-contentalert-banner"
    >
      {children}
    </section>
  );
}
