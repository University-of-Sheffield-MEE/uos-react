export interface JobTitleProps {
  title: string;
}

export function JobTitle({ title }: JobTitleProps) {
  return <span className="jobtitle">{title}</span>;
}
