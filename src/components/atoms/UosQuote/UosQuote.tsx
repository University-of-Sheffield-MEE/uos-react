export interface UosQuoteProps {
  quote: string;
  name?: string;
  attribution?: string;
}

export function UosQuote({ quote, name, attribution }: UosQuoteProps) {
  return (
    <blockquote className="uosquote">
      <div className="uosquote-quote">
        <p>{quote}</p>
      </div>
      {name && <p className="uosquote-name">{name}</p>}
      {attribution && <p className="uosquote-attribution">{attribution}</p>}
    </blockquote>
  );
}
