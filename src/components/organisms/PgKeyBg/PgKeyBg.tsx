export interface PgKeyBgProps {
  startYear: string;
  courseTitle: string;
  awardType: string;
  department: string;
  courseIntro: string;
  startDate: string;
  durations: Array<string>;
  attendanceModes?: Array<string>;
  featureAccredited?: boolean;
  featureCourseFee?: boolean;
  buttons: Array<{ label: string; href: string }>;
  stickyButtons: Array<{ label: string; href: string; iconClass: string }>;
}

export function PgKeyBg({
  startYear,
  courseTitle,
  awardType,
  department,
  courseIntro,
  startDate,
  durations,
  attendanceModes,
  featureAccredited = false,
  featureCourseFee = false,
  buttons,
  stickyButtons,
}: PgKeyBgProps) {
  return (
    <div className="pgkeybg">
      <div className="pg-title-box">
        <div className="left">
          <span className="startyear">{startYear}</span>

          <h1 className="pgtitle">
            <span className="fb-award-title">{courseTitle}</span>{' '}
            <span className="fb award-type">{awardType}</span>
          </h1>

          <p className="fb deptfac">{department}</p>

          <div className="pg-course-introd">{courseIntro}</div>

          <ul className="details">
            <li>
              <span className="startdate">Start date</span>
              <br />
              {startDate}
            </li>
            <li>
              <span className="duration">Duration</span>
              <br />
              {durations.map((d, i) => (
                <span key={i} className="fb pgduration">{d}</span>
              ))}
            </li>
            {attendanceModes && attendanceModes.length > 0 && (
              <li>
                <span className="attendance">Attendance</span>
                <br />
                {attendanceModes.map((a, i) => (
                  <span key={i} className="pgattendance">{a}</span>
                ))}
              </li>
            )}
          </ul>

          <ul className="features">
            {featureAccredited && (
              <li><i className="fas fa-award"></i> <a href="#accreditation">Accredited</a></li>
            )}
            {featureCourseFee && (
              <li><i className="fas fa-coins"></i> <a href="#feesfunding">Course fee</a></li>
            )}
          </ul>
        </div>

        <div className="buttons">
          {buttons.map((btn, i) => (
            <a key={i} className="uosbutton" href={btn.href}>{btn.label}</a>
          ))}
        </div>
      </div>

      <div className="sticky-ctas on-load">
        <div className="shrinkctas">Hide</div>
        <div className="ugbuttons">
          {stickyButtons.map((btn, i) => (
            <a key={i} className="stickybutton" href={btn.href}>
              <i className={btn.iconClass}></i>{btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
