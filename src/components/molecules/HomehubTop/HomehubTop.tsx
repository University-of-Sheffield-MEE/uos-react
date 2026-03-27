import { LogosHomehub } from '../LogosHomehub';

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
  ariaLabel?: string;
}

export interface HomehubTopProps {
  logos: Array<LogoItem>;
  showScrollArrows?: boolean;
}

export function HomehubTop({
  logos,
  showScrollArrows = false,
}: HomehubTopProps) {
  return (
    <div className="homehub-top">
      <LogosHomehub logos={logos} showScrollArrows={showScrollArrows} />
    </div>
  );
}
