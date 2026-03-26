interface ButtonItem {
  label: string;
  href: string;
  className?: string;
}

interface StickyButtonItem {
  label: string;
  href: string;
  iconClass: string;
}

export interface UgKeyBgProps {
  startYear: string;
  altEntryLabel?: string;
  altEntryHref?: string;
  courseTitle: string;
  awardType: string;
  department: string;
  summary: string;
  aLevels: string;
  ucasCode: string;
  duration: string;
  startDate: string;
  attendance?: string;
  featureAccredited?: boolean;
  featureFees?: boolean;
  featureFundingAvailable?: boolean;
  featureOptionalPlacementYear?: boolean;
  featureStudyAbroadOption?: boolean;
  featureStudyAbroad?: boolean;
  featureSandwichYear?: boolean;
  buttons: ButtonItem[];
  stickyButtons: StickyButtonItem[];
}

export function UgKeyBg({
  startYear,
  altEntryLabel,
  altEntryHref,
  courseTitle,
  awardType,
  department,
  summary,
  aLevels,
  ucasCode,
  duration,
  startDate,
  attendance,
  featureAccredited = false,
  featureFees = false,
  featureFundingAvailable = false,
  featureOptionalPlacementYear = false,
  featureStudyAbroadOption = false,
  featureStudyAbroad = false,
  featureSandwichYear = false,
  buttons,
  stickyButtons,
}: UgKeyBgProps) {
  return (
    <div className="ugkeybg">
      <div className="title-box">
        <div className="left">
          <div className="text">
            <span className="startyr">{startYear}</span>
            {altEntryLabel && altEntryHref && (
              <span className="altentry">
                <a href={altEntryHref}>{altEntryLabel}</a>
              </span>
            )}
            <div className="topdetail">
              <h1>
                <span className="fb-award-title">{courseTitle}</span>{' '}
                <span className="fb award-type">{awardType}</span>
              </h1>
              <div>
                <span className="fb-award-department">{department}</span>
              </div>
            </div>
            <div className="summary">
              <span className="fb-award-summary">
                <p>{summary}</p>
              </span>
            </div>
          </div>

          <div className="keydetails">
            <ul className="details">
              <li>
                <span className="alevels">A Levels</span>
                <br />
                <span className="fb-award-alevels">{aLevels}</span>
              </li>
              <li>
                <span className="ucascode">UCAS code</span>
                <br />
                <span className="fb-award-ucascode">{ucasCode}</span>
              </li>
              <li>
                <span className="duration">Duration</span>
                <br />
                <span className="fb-award-duration">{duration}</span>
              </li>
              <li>
                <span className="startdate">Start date</span>
                <br />
                <span className="fb-award-duration">{startDate}</span>
              </li>
              {attendance && (
                <li>
                  <span className="attendance">Attendance</span>
                  <br />
                  <span className="fb-award-duration">{attendance}</span>
                </li>
              )}
            </ul>

            <ul className="features" role="list">
              {featureAccredited && (
                <li className="ug-accredited-feature">
                  <i className="fas fa-award"></i>{' '}
                  <a href="#accreds" title="Accredited">Accredited</a>
                </li>
              )}
              {featureFees && (
                <li className="ug-fees-feature">
                  <i className="fas fa-coins"></i>
                  <a href="#fees" title="Fees">Course fee</a>
                </li>
              )}
              {featureFundingAvailable && (
                <li className="funding-available">
                  <i className="fas fa-coins"></i> Funding available
                </li>
              )}
              {featureOptionalPlacementYear && (
                <li className="optional-placement-year">
                  <i className="fas fa-briefcase"></i>{' '}
                  <a href="#plstudyabroad" title="Optional placement year">Optional placement year</a>
                </li>
              )}
              {featureStudyAbroadOption && (
                <li className="study-abroad-option">
                  <i className="fas fa-plane"></i>{' '}
                  <a href="#plstudyabroad" title="Study abroad option">Study abroad option</a>
                </li>
              )}
              {featureStudyAbroad && (
                <li className="study-abroad">
                  <i className="fas fa-plane"></i>{' '}
                  <a href="#plstudyabroad" title="Study abroad">Study abroad</a>
                </li>
              )}
              {featureSandwichYear && (
                <li className="fy">
                  <i className="fas fa-briefcase"></i>{' '}
                  <a href="#plstudyabroad" title="Sandwich year">Sandwich year</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="buttons">
          {buttons.map((btn, i) => (
            <a
              key={i}
              className={`uosbutton${btn.className ? ` ${btn.className}` : ''}`}
              href={btn.href}
            >
              {btn.label}
            </a>
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
