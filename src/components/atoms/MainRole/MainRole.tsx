export interface MainRoleProps {
  role: string;
}

export function MainRole({ role }: MainRoleProps) {
  return <p className="mainrole">{role}</p>;
}
