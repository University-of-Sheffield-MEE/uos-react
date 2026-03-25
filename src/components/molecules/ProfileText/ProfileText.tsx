import type { ReactNode } from 'react';

export interface ProfileTextProps {
  label?: string;
  children: ReactNode;
  active?: boolean;
  teachingFocus?: boolean;
}

export function ProfileText({
  label = 'Profile',
  children,
  active = true,
  teachingFocus = false,
}: ProfileTextProps) {
  return (
    <dl className={`profiletext ckeditor-accordion used-outside-of-ckeditor${teachingFocus ? ' teachingfocus' : ''}`}>
      <dt className={`standalone-accordion${active ? ' active' : ''}`}>{label}</dt>
      <dd className={active ? 'active' : ''} style={active ? { display: 'block' } : undefined}>
        {children}
      </dd>
    </dl>
  );
}
