export interface StudentProfileTitleProps {
  quote: string;
}

export function StudentProfileTitle({ quote }: StudentProfileTitleProps) {
  return (
    <div className="block block-layout-builder block-field-blocknodestudent-profiletitle">
      <h1>{quote}</h1>
    </div>
  );
}
