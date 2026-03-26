export interface StatItem {
  title: string;
  source: string;
}

export interface DepartmentStatsProps {
  stats: StatItem[];
}

export function DepartmentStats({ stats }: DepartmentStatsProps) {
  return (
    <div className="departmentstats">
      <h3 className="sr-only">Department statistics</h3>
      {stats.map((stat, i) => (
        <div key={i} className="paragraph paragraph--type--ug-statistic paragraph--view-mode--default">
          <h4 className="stat-title"><i className="fas fa-star"></i> {stat.title}</h4>
          <p>{stat.source}</p>
        </div>
      ))}
    </div>
  );
}
