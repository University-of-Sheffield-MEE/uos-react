import { Button } from '../../atoms/Button';

interface AzLink {
  label: string;
  href: string;
}

export interface UgCourseSearchProps {
  similarCoursesHref: string;
  similarCoursesLabel: string;
  azLinks?: AzLink[];
}

export function UgCourseSearch({
  similarCoursesHref,
  similarCoursesLabel,
  azLinks = [],
}: UgCourseSearchProps) {
  return (
    <div className="ug-course-search">
      <div className="row pad">
        <div className="large-8 columns">
          <label className="footer-course-search-label" htmlFor="footer-course-search-text">
            Find an undergraduate course
          </label>
          <form className="ug-course-form" method="get" action="/find">
            <input
              type="text"
              id="footer-course-search-text"
              name="query"
              placeholder="Course title or keyword"
              aria-label="Search text"
            />
            <input
              type="hidden"
              name="f.Tabs|uos~ds-courses-undergraduate-new,uos~ds-courses,uos~ds-courses-postgraduate"
              value="Courses"
            />
            <input
              type="hidden"
              name="f.Study level|uos~ds-courses-undergraduate-new"
              value="Undergraduate"
            />
            <Button as="button" label="Search" primary={true} />
          </form>
          <a href={similarCoursesHref}>{similarCoursesLabel}</a>
          <strong className="sim-courses-pipe"> | </strong>
          <br className="sim-courses-link-break" />
          {azLinks.map((link, index) => (
            <span key={index}>
              {index > 0 && ' | '}
              <a className="uoslink" href={link.href}>{link.label}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
