export interface FieldMultiTitleProps {
  text: string;
}

export function FieldMultiTitle({ text }: FieldMultiTitleProps) {
  return <h2 className="field-multi-title">{text}</h2>;
}
