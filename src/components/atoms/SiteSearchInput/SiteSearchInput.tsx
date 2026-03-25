import type { ChangeEvent } from 'react';

export interface SiteSearchInputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  ariaLabel?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function SiteSearchInput({
  id = 'site-search-box',
  name = 'query',
  placeholder = 'Search our site',
  ariaLabel = 'Search our site',
  value,
  onChange,
  required = true,
}: SiteSearchInputProps) {
  return (
    <input
      id={id}
      className="site-search-input"
      type="search"
      name={name}
      autoComplete="off"
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-autocomplete="list"
      aria-haspopup="true"
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
