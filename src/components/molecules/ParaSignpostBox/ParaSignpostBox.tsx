export interface ParaSignpostBoxProps {
  href: string;
  ariaLabel: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  dark?: boolean;
  highlight?: boolean;
}

export function ParaSignpostBox({
  href,
  ariaLabel,
  title,
  imageSrc,
  imageAlt,
  dark = false,
  highlight = false,
}: ParaSignpostBoxProps) {
  return (
    <div
      className={`paragraph paragraph--type--para-signpost-box paragraph--view-mode--default${dark ? ' dark' : ''}${highlight ? ' highlight' : ''}`}
    >
      <a aria-label={ariaLabel} href={href}>
        <div className="block block-layout-builder block-field-blockparagraphpara-signpost-boxfield-sb-image">
          <div className="media--image--figure">
            <figure className="imgcapt">
              <picture>
                <img
                  loading="eager"
                  width="375"
                  height="211"
                  src={imageSrc}
                  alt={imageAlt}
                />
              </picture>
            </figure>
          </div>
        </div>
        <div className="block block-layout-builder block-field-blockparagraphpara-signpost-boxfield-sb-title">
          <div className="sbtitle">{title}</div>
          <div className="sbarrow">
            <i className="fas fa-sm fa-arrow-right"></i>
          </div>
        </div>
      </a>
    </div>
  );
}
