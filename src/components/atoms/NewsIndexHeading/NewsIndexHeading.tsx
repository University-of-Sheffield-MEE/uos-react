export interface NewsIndexHeadingProps {
  text?: string;
}

export function NewsIndexHeading({ text = 'News stories' }: NewsIndexHeadingProps) {
  return <h2 className="news-index">{text}</h2>;
}
