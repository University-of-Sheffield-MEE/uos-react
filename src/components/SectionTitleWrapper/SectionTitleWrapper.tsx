export interface SectionTitleWrapperProps {
  sectionTitle: string;
  sectionHref: string;
}

export function SectionTitleWrapper({ sectionTitle, sectionHref }: SectionTitleWrapperProps) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title-holder">
        <a href={sectionHref} hrefLang="en">{sectionTitle}</a>
      </h2>
      <a
        className="button menu"
        role="button"
        data-toggle="left-off-canvas-menu"
        aria-expanded="false"
        aria-controls="left-off-canvas-menu"
        tabIndex={0}
      >
        Menu <span className="section-title-burger" aria-hidden="true"></span>
      </a>
    </div>
  );
}
