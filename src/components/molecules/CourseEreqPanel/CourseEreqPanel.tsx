import type { ReactNode } from 'react';

export interface CourseEreqPanelQualification {
  term: string;
  description: string;
}

export interface CourseEreqPanelProps {
  id: string;
  ariaLabelledBy: string;
  variant?: 'standard' | 'access_sheffield' | 'no-access';
  offerLabel: string;
  grades: string;
  gradesContext?: string;
  qualifications: CourseEreqPanelQualification[];
  hasColon?: boolean;
  matureStudentsContent?: ReactNode;
  otherRequirements?: string[];
}

export function CourseEreqPanel({
  id,
  ariaLabelledBy,
  variant = 'standard',
  offerLabel,
  grades,
  gradesContext,
  qualifications,
  hasColon = true,
  matureStudentsContent,
  otherRequirements,
}: CourseEreqPanelProps) {
  const rootClass =
    variant === 'no-access'
      ? 'course-ereq-panel course-ereq-panel--no-access'
      : `course-ereq-panel ${variant}`;

  const isNoAccess = variant === 'no-access';

  const dlClass = isNoAccess
    ? undefined
    : `inline-description-list${hasColon ? ' inline-description-list--has-colon' : ''}`;

  return (
    <section
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
      className={rootClass}
    >
      <span className="offer-headers printonly">{offerLabel}</span>

      <p>
        The A Level entry requirements for this course are:<br />
        <span className="grades">{grades}</span>
        {gradesContext && (
          <>
            <br />
            {gradesContext}
          </>
        )}
      </p>

      {isNoAccess ? (
        <dl>
          {qualifications.map((q, i) => (
            <>
              <dt key={`dt-${i}`}>
                <strong className="course-ereq-panel__qualification-name">{q.term}</strong>
              </dt>
              <dt key={`dt2-${i}`}></dt>
              <dd key={`dd-${i}`}>{q.description}</dd>
            </>
          ))}
        </dl>
      ) : (
        <dl className={dlClass}>
          {qualifications.map((q, i) => (
            <>
              <dt key={`dt-${i}`} className="inline-description-list__term">{q.term}</dt>
              <dd key={`dd-${i}`} className="inline-description-list__description">{q.description}</dd>
            </>
          ))}
        </dl>
      )}

      <div className="ugp-mature-students-text">
        {matureStudentsContent}
      </div>

      {otherRequirements && otherRequirements.length > 0 && (
        <>
          <strong>Other requirements</strong>
          <ul>
            {otherRequirements.map((req, i) => (
              <li key={i}>
                <div className="paragraph paragraph--type--ug-other-requirements paragraph--view-mode--default">
                  <div className="otherreqstext">
                    <p>{req}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
