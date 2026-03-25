export interface SectionTitleProps {
  sectionLabel: string;
  sectionHref: string;
  menuTargetId?: string;
}

export function SectionTitle({
  sectionLabel,
  sectionHref,
  menuTargetId = 'left-off-canvas-menu',
}: SectionTitleProps) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title-holder">
        <a href={sectionHref} hrefLang="en">{sectionLabel}</a>
      </h2>
      <a
        className="button menu"
        role="button"
        data-toggle={menuTargetId}
        aria-expanded="false"
        aria-controls={menuTargetId}
        tabIndex={0}
      >
        Menu <span className="section-title-burger" aria-hidden="true"></span>
      </a>
    </div>
  );
}
