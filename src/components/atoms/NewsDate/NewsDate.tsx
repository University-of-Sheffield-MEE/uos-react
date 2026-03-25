export interface NewsDateProps {
  datetime: string;
  label: string;
}

export function NewsDate({ datetime, label }: NewsDateProps) {
  return (
    <span className="news-date">
      <time dateTime={datetime}>{label}</time>
    </span>
  );
}
