import type { ReactNode } from 'react';

export interface ParaMediaBoxProps {
  title?: string;
  media: ReactNode;
  children?: ReactNode;
}

export function ParaMediaBox({ title, media, children }: ParaMediaBoxProps) {
  return (
    <div className="uosblock paragraph paragraph--type--para-media-box paragraph--view-mode--default">
      {title && <h3 className="field-mb-title">{title}</h3>}
      <div className="field field-paragraph--field-mb-media-item field-name-field-mb-media-item field-type-entity-reference field-label-hidden">
        <div className="field-items">
          {media}
        </div>
      </div>
      {children}
    </div>
  );
}
