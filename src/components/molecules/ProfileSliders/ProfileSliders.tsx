export interface ProfileSlidersProps {
  leftInactive?: boolean;
  rightInactive?: boolean;
  onSlideLeft?: () => void;
  onSlideRight?: () => void;
}

export function ProfileSliders({
  leftInactive = false,
  rightInactive = false,
  onSlideLeft,
  onSlideRight,
}: ProfileSlidersProps) {
  return (
    <div className="profile-sliders">
      <div
        className={`slide-left${leftInactive ? ' inactive' : ''}`}
        onClick={onSlideLeft}
      >
        <i className="fas fa-angle-left"></i>
      </div>
      <div
        className={`slide-right${rightInactive ? ' inactive' : ''}`}
        onClick={onSlideRight}
      >
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}
