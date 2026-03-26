export interface CourseEreqTabsProps {
  activeTab?: 'standard' | 'access_sheffield';
}

export function CourseEreqTabs({ activeTab = 'standard' }: CourseEreqTabsProps) {
  return (
    <div className="course-ereq-tabs">
      <ul role="tablist" className="course-ereq-tabslist js-course-ereq-tabslist">
        <li role="presentation">
          <button
            role="tab"
            id="js-course-ereq-tab--standard"
            aria-controls="js-course-ereq-panel--standard"
            className={activeTab === 'standard' ? 'is-active' : undefined}
          >
            Standard offer
          </button>
        </li>
        <li role="presentation">
          <button
            role="tab"
            id="js-course-ereq-tab--access_sheffield"
            aria-controls="js-course-ereq-panel--access_sheffield"
            className={activeTab === 'access_sheffield' ? 'is-active' : undefined}
          >
            Access Sheffield offer
          </button>
        </li>
      </ul>
    </div>
  );
}
