interface PublicationsListItem {
  authors: string;
  titleHref: string;
  title: string;
  journal: string;
  volumeAndPages?: string;
  wrroHref?: string;
  risExportHref?: string;
  bibtexExportHref?: string;
}

export interface PublicationsListProps {
  items: PublicationsListItem[];
}

export function PublicationsList({ items }: PublicationsListProps) {
  return (
    <ul className="publicationsList">
      {items.map((item, index) => (
        <li key={index}>
          <span className="author">{item.authors}</span>{' '}
          <a target="_top" href={item.titleHref}>{item.title}</a>.{' '}
          <cite>{item.journal}</cite>
          {item.volumeAndPages && `, ${item.volumeAndPages}`}
          {item.wrroHref && (
            <> <a href={item.wrroHref}>View this article in WRRO</a></>
          )}
          {item.risExportHref && (
            <> <a href={item.risExportHref}><img src="https://sheffield.ac.uk/themes/custom/uos_public/images/ris-icon.png" alt="RIS download" className="export-icon" /></a></>
          )}
          {item.bibtexExportHref && (
            <> <a href={item.bibtexExportHref}><img src="https://sheffield.ac.uk/themes/custom/uos_public/images/bibtex-icon.png" alt="Bibtex download" className="export-icon" /></a></>
          )}
        </li>
      ))}
    </ul>
  );
}
