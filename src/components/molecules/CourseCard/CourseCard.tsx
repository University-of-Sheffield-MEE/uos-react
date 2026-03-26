import type { ReactNode } from 'react';

interface MetaItem {
  icon: string;
  text: string;
}

export interface CourseCardProps {
  title: string;
  award?: string;
  level?: string;
  description?: string;
  isUndergraduate?: boolean;
  metaItems?: MetaItem[];
  details?: ReactNode;
  features?: string[];
  isAccredited?: boolean;
}

export function CourseCard({
  title,
  award,
  level,
  description,
  isUndergraduate = false,
  metaItems,
  details,
  features,
  isAccredited = false,
}: CourseCardProps) {
  return (
    <div className={`coursecard${isUndergraduate ? ' ugcoursecard' : ''}`}>
      <div className="coursecardcontent">
        {isUndergraduate ? (
          <>
            {level && <div className="level">{level}</div>}
            <h3>
              {title}
              {award && <span className="award">{award}</span>}
            </h3>
            {details && <div className="details">{details}</div>}
            {description && <p>{description}</p>}
            {features && features.length > 0 && (
              <ul role="list" className="course-features">
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <div className="coursecard__heading">
              <h3>
                {title}
                {award && <span className="award">{award}</span>}
              </h3>
              {level && <div className="level">{level}</div>}
            </div>
            {(metaItems && metaItems.length > 0) || isAccredited ? (
              <ul className="coursemeta">
                {metaItems &&
                  metaItems.map((item, i) => (
                    <li key={i}>
                      <i className={`fas ${item.icon}`}></i> {item.text}
                    </li>
                  ))}
                {isAccredited && (
                  <li>
                    <i className="fas fa-award"></i> Accredited
                  </li>
                )}
              </ul>
            ) : null}
            {description && <p>{description}</p>}
            {features && features.length > 0 && (
              <ul className="course-features">
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div className="link-arrow">
        <div className="ccarrow">
          <i className="fas fa-sm fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
