import { StapCard } from '../../molecules/StapCard';
import type { StapCardProps } from '../../molecules/StapCard';

export interface StaffCardIndexProps {
  manual?: boolean;
  cards: StapCardProps[];
}

export function StaffCardIndex({
  manual = true,
  cards,
}: StaffCardIndexProps) {
  return (
    <div className={`staffcardindex${manual ? ' manual' : ''}`}>
      {cards.map((card, index) => (
        <div key={index}>
          <StapCard {...card} />
        </div>
      ))}
    </div>
  );
}
