export interface StaffPronounsProps {
  pronouns: string;
}

export function StaffPronouns({ pronouns }: StaffPronounsProps) {
  return <span className="staff-pronouns">{pronouns}</span>;
}
