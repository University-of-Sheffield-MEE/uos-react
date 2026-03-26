export interface StudentProfileNameProps {
  text: string;
  fieldType?: 'name' | 'black-text-sub-header' | 'grey-text-sub-header' | 'year';
}

export function StudentProfileName({
  text,
  fieldType = 'name',
}: StudentProfileNameProps) {
  const fieldClass = `block-field-blocknodestudent-profilefield-stup-${fieldType}`;

  return (
    <div className={`block block-layout-builder ${fieldClass}`}>
      {text}
    </div>
  );
}
