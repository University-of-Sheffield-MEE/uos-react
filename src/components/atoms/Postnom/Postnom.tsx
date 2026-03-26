export interface PostnomProps {
  text: string;
}

export function Postnom({ text }: PostnomProps) {
  return <p className="postnom">{text}</p>;
}
