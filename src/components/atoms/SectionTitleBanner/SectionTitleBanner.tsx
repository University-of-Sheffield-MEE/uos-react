export interface SectionTitleBannerProps {
  label: string;
  href: string;
}

export function SectionTitleBanner({ label, href }: SectionTitleBannerProps) {
  return (
    <div className="field-content section-title row">
      <div className="section-title-holder">
        <h4 className="off-canv">
          <a href={href} hrefLang="en">{label}</a>
        </h4>
      </div>
    </div>
  );
}
