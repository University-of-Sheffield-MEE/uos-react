import { DeptName } from '../../atoms/DeptName';

export interface PersonInfoProps {
  firstName: string;
  lastName: string;
  title?: string;
  department: string;
  mainRole: string;
  postNominals?: string;
  roles?: string;
  profileImageSrc?: string;
  profileImageAlt?: string;
  profileModalImageSrc?: string;
}

export function PersonInfo({
  firstName,
  lastName,
  title,
  department,
  mainRole,
  postNominals,
  roles,
  profileImageSrc,
  profileImageAlt,
  profileModalImageSrc,
}: PersonInfoProps) {
  return (
    <div className="personinfo">
      <div>
        <h1>
          {title ? `${title} ` : ''}{firstName} {lastName}
        </h1>
        {postNominals && <p className="postnom">{postNominals}</p>}
        <DeptName name={department} />
        <p className="mainrole">{mainRole}</p>
        {roles && <p className="roles">{roles}</p>}
      </div>
      {profileImageSrc && (
        <div className="profilepic">
          <div className="media--image--figure">
            <figure className="imgcapt">
              <picture>
                <img
                  loading="eager"
                  width="180"
                  height="180"
                  src={profileImageSrc}
                  alt={profileImageAlt}
                />
              </picture>
            </figure>
          </div>
          <button className="enlarge">
            <span className="show-for-sr">Open staff member portrait in a modal window</span>
          </button>
          <div className="profilepic-modal">
            <button className="close" aria-label="Close image modal">
              <i className="fas fa-times-circle"></i>
            </button>
            <picture>
              <img
                width="600"
                height="600"
                src={profileModalImageSrc}
                alt={profileImageAlt ? `Profile picture of ${profileImageAlt}` : undefined}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
}
