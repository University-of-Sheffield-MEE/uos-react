import type { ReactNode } from 'react';

export interface OtherReqsTextProps {
  children: ReactNode;
}

export function OtherReqsText({ children }: OtherReqsTextProps) {
  return (
    <div className="otherreqstext">
      {children}
    </div>
  );
}
