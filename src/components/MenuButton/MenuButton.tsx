export interface MenuButtonProps {
  menuId?: string;
  isExpanded?: boolean;
}

export function MenuButton({
  menuId = 'left-off-canvas-menu',
  isExpanded = false,
}: MenuButtonProps) {
  return (
    <a
      className="button menu"
      role="button"
      data-toggle={menuId}
      aria-expanded={isExpanded}
      aria-controls={menuId}
      tabIndex={0}
    >
      Menu <span className="section-title-burger" aria-hidden="true"></span>
    </a>
  );
}
