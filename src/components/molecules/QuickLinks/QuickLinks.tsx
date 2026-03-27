import { RelLink } from '../../atoms/RelLink';

interface LinkItem {
  label: string;
  href: string;
  title?: string;
}

export interface QuickLinksProps {
  heading?: string;
  links: Array<LinkItem>;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function QuickLinks({ heading, links }: QuickLinksProps) {
  const rows = chunkArray(links, 3);

  return (
    <div className="quicklinks">
      {heading && <h3>{heading}</h3>}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="multicol">
          <div className="row matchheight">
            {row.map((link, linkIndex) => (
              <div key={linkIndex} className="medium-4 columns">
                <RelLink href={link.href} label={link.label} title={link.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
