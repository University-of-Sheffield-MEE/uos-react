export interface UosTabItem {
  id: string;
  label: string;
  selected?: boolean;
  tabIndex?: number;
}

export interface UosTabsProps {
  ariaLabel?: string;
  tabs: UosTabItem[];
}

export function UosTabs({ ariaLabel = 'Years', tabs }: UosTabsProps) {
  return (
    <div className="tab-gradient">
      <div role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.selected ? true : false}
            aria-controls={tab.id}
            id={`${tab.id}-btn`}
            tabIndex={tab.selected ? undefined : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
