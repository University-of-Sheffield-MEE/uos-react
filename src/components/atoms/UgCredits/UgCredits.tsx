export interface UgCreditsProps {
  credits: string;
}

export function UgCredits({ credits }: UgCreditsProps) {
  return (
    <strong className="ugcredits">{credits}</strong>
  );
}
