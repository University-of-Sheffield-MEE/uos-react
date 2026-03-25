export interface DeptNameProps {
  name: string;
  as?: string;
}

export function DeptName({ name, as: Tag = 'div' }: DeptNameProps) {
  if (Tag === 'span') {
    return <span className="deptname">{name}</span>;
  }

  return (
    <div className="deptname">
      <p>{name}</p>
    </div>
  );
}
