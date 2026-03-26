interface StatItem {
  iconClass: string;
  title: string;
  description: string;
}

export interface CourseStatsProps {
  heading?: string;
  stats: StatItem[];
}

export function CourseStats({
  heading = 'Why study this course?',
  stats,
}: CourseStatsProps) {
  return (
    <div className="coursestats">
      <h3>{heading}</h3>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="paragraph paragraph--type--ug-statistic paragraph--view-mode--default"
        >
          <h4 className="stat-title">
            <i className={stat.iconClass}></i> {stat.title}
          </h4>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
