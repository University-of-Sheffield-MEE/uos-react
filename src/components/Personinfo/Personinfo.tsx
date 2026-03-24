export interface PersoninfoProps {
  title?: string;
  firstName: string;
  lastName: string;
  postNominals?: string;
  department: string;
  mainRole: string;
  secondaryRole?: string;
  profileImageSrc?: string;
  profileImageAlt?: string;
  profileModalImageSrc?: string;
}

export function Personinfo({
  title,
  firstName,
  lastName,
  postNominals,
  department,
  mainRole,
  secondaryRole,
  profileImageSrc,
  profileImageAlt,
  profileModalImageSrc,
}: PersoninfoProps) {
  return (
    <div className="personinfo">
      <div>
        <h1>
          {title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`}
        </h1>
        {postNominals && <p className="postnom">{postNominals}</p>}
        <div className="deptname">
          <p>{department}</p>
        </div>
        <p className="mainrole">{mainRole}</p>
        {secondaryRole && <p className="roles">{secondaryRole}</p>}
      </div>
      {profileImageSrc && (
        <div className="profilepic">
          <div className="media--image--figure">
            <figure className="imgcapt">
              <picture>
                <img
                  src={profileImageSrc}
                  alt={profileImageAlt}
                  width={180}
                  height={180}
                  loading="eager"
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
                src={profileModalImageSrc}
                alt={`Profile picture of ${profileImageAlt}`}
                width={600}
                height={600}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
}
