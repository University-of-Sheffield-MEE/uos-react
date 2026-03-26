export interface ProfileCardProps {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  quote: string;
  name: string;
  subhead?: string;
  subhead2?: string;
}

export function ProfileCard({
  href,
  imageSrc,
  imageAlt = '',
  quote,
  name,
  subhead,
  subhead2,
}: ProfileCardProps) {
  return (
    <a href={href} className="profilecard">
      <div className="thumb">
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <source
                srcSet={`${imageSrc} 80w`}
                media="all and (min-width: 1920px)"
                type="image/jpeg"
                sizes="(min-width: 1920px) 60px, 3.1vw"
                width={120}
                height={120}
              />
              <source
                srcSet={`${imageSrc} 80w`}
                media="screen and (min-width: 1280px)"
                type="image/jpeg"
                sizes="(min-width: 1280px) 60px, 4.7vw"
                width={120}
                height={120}
              />
              <source
                srcSet={`${imageSrc} 80w`}
                media="screen and (min-width: 1024px)"
                type="image/jpeg"
                sizes="(min-width: 1024px) 60px, 5.9vw"
                width={120}
                height={120}
              />
              <source
                srcSet={`${imageSrc} 80w`}
                media="screen and (min-width: 768px)"
                type="image/jpeg"
                sizes="(min-width: 768px) 60px, 7.8vw"
                width={120}
                height={120}
              />
              <source
                srcSet={`${imageSrc} 80w`}
                type="image/jpeg"
                sizes="50px, 12.5vw"
                width={120}
                height={120}
              />
              <img
                loading="eager"
                width={80}
                height={80}
                src={imageSrc}
                alt={imageAlt}
              />
            </picture>
          </figure>
        </div>
      </div>

      <p>{quote}</p>

      <span className="name">{name}</span>

      {(subhead || subhead2) && (
        <p>
          {subhead && <span className="subhead">{subhead}</span>}
          {subhead && subhead2 && <br />}
          {subhead2 && <span className="subhead2">{subhead2}</span>}
        </p>
      )}
    </a>
  );
}
