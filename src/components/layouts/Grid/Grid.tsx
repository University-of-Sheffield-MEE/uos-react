import type { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
}

export interface GridRowProps {
  matchHeight?: boolean;
  className?: string;
  children: ReactNode;
}

export interface GridColProps {
  small?: number;
  medium?: number;
  large?: number;
  className?: string;
  children: ReactNode;
}

function GridRow({ matchHeight = false, className, children }: GridRowProps) {
  return (
    <div className={`row${matchHeight ? ' matchheight' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}

function GridCol({ small, medium, large, className, children }: GridColProps) {
  const classes = [
    small !== undefined ? `small-${small}` : '',
    medium !== undefined ? `medium-${medium}` : '',
    large !== undefined ? `large-${large}` : '',
    'columns',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

export function Grid({ children }: GridProps) {
  return <div className="multicol">{children}</div>;
}

Grid.Row = GridRow;
Grid.Col = GridCol;
