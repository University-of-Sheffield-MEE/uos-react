export interface StudentProfileIntroProps {
  intro: string;
}

export function StudentProfileIntro({ intro }: StudentProfileIntroProps) {
  return (
    <div className="block block-layout-builder block-field-blocknodestudent-profilefield-stup-intro">
      <div className="leadintro">{intro}</div>
    </div>
  );
}
