export interface RolesProps {
  text: string;
}

export function Roles({ text }: RolesProps) {
  return <p className="roles">{text}</p>;
}
