import type { ReactNode } from 'react';

export interface OffCanvasWrapperProps {
  offCanvasPanel?: ReactNode;
  children: ReactNode;
}

export function OffCanvasWrapper({
  offCanvasPanel,
  children,
}: OffCanvasWrapperProps) {
  return (
    <div className="off-canvas-wrapper">
      <div
        className="inner-wrap off-canvas-wrapper-inner"
        id="inner-wrap"
        data-off-canvas-wrapper=""
      >
        <aside
          id="left-off-canvas-menu"
          className="off-canvas left-off-canvas-menu position-left"
          role="complementary"
          data-off-canvas=""
          data-transition="overlap"
        >
          {offCanvasPanel}
        </aside>
        <aside
          id="right-off-canvas-menu"
          className="off-canvas right-off-canvas-menu position-right"
          role="complementary"
          data-off-canvas=""
          data-transition="overlap"
        />
        <div className="off-canvas-content" data-off-canvas-content="">
          {children}
        </div>
      </div>
    </div>
  );
}
