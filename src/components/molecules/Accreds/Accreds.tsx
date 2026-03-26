interface AccredItem {
  href: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
}

export interface AccredsProps {
  items: AccredItem[];
}

export function Accreds({ items }: AccredsProps) {
  return (
    <div className="accreds">
      {items.map((item, index) => (
        <a key={index} href={item.href} target="_blank" className="accbody" title="">
          <div className="media--image--figure">
            <figure className="imgcapt">
              <img src={item.imgSrc} alt={item.imgAlt} />
            </figure>
          </div>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
