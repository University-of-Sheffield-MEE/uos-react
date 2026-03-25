import { SiteSearch } from '../../molecules/SiteSearch';

export interface MuseBarProps {}

export function MuseBar(_props: MuseBarProps) {
  return (
    <div className="muse-bar-container">
      <div className="muse-bar smooth-criminal">
        <nav className="muse" aria-label="MUSE menu">
          <ul className="muse-nav">
            <li className="switcher-container">
              <a className="switcher-button" href="/">
                <i title="Home" className="fas fa-home fa-lg"></i>
              </a>
            </li>
          </ul>
        </nav>
        <SiteSearch />
      </div>
    </div>
  );
}
