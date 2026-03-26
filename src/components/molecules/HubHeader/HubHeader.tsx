import { LeadIntro } from '../../atoms/LeadIntro';

export interface HubHeaderProps {
  title: string;
  intro?: string;
  fullWidth?: boolean;
}

export function HubHeader({
  title,
  intro,
  fullWidth = true,
}: HubHeaderProps) {
  return (
    <div className={`hub-header${fullWidth ? ' full-width' : ''}`}>
      <div className="hubintro">
        <h1>{title}</h1>
        {intro && <LeadIntro>{intro}</LeadIntro>}
      </div>
    </div>
  );
}
