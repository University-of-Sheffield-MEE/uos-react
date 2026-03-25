export interface HeadlineProps {
  text: string;
}

export function Headline({ text }: HeadlineProps) {
  return <h1 className="headline">{text}</h1>;
}
