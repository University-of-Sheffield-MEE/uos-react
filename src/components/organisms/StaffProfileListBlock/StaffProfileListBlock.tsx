import { AtozList } from '../../molecules/AtozList';

interface StaffMember {
  name: string;
  profileHref: string;
  role: string;
  department: string;
  email: string;
  telephone?: string;
  telephoneHref?: string;
}

interface StaffGroup {
  letter: string;
  id: string;
  members: StaffMember[];
}

export interface StaffProfileListBlockProps {
  alphaLinks: Array<{ letter: string; href: string }>;
  groups: StaffGroup[];
}

export function StaffProfileListBlock({ alphaLinks, groups }: StaffProfileListBlockProps) {
  return (
    <div className="tablesaw tablesaw-stack staff-profile-list-block">
      <AtozList items={alphaLinks.map((link) => ({ label: link.letter, href: link.href }))} />
      <table className="cols-6">
        <thead>
          <tr>
            <th id="view-view-node-table-column" className="views-field views-field-view-node" scope="col">Name</th>
            <th id="view-field-stap-main-job-title-table-column" className="views-field views-field-field-stap-main-job-title" scope="col">Role</th>
            <th id="view-field-stap-dept-name-table-column" className="views-field views-field-field-stap-dept-name" scope="col">Department/school</th>
            <th id="view-field-stap-show-email-table-column" className="views-field views-field-field-stap-show-email" scope="col">Email address</th>
            <th id="view-field-stap-show-telephone-table-column" className="views-field views-field-field-stap-show-telephone" scope="col">Telephone</th>
            <th id="view-field-stap-surname-2-table-column" className="views-field views-field-field-stap-surname-2" scope="col">Surname</th>
          </tr>
        </thead>
        <tbody>
          {groups.flatMap((group) => [
            <tr key={`header-${group.id}`}>
              <td colSpan={6}>
                <h3>
                  <span id={group.id}>{group.letter}</span>
                </h3>
              </td>
            </tr>,
            ...group.members.map((member, idx) => (
              <tr key={`${group.id}-member-${idx}`}>
                <td headers="view-view-node-table-column" className="views-field views-field-view-node views-field-view-node-1">
                  <a href={member.profileHref} hrefLang="en">{member.name}</a>
                </td>
                <td headers="view-field-stap-main-job-title-table-column" className="views-field views-field-field-stap-main-job-title views-field-field-stap-main-job-title-1">{member.role}</td>
                <td headers="view-field-stap-dept-name-table-column" className="views-field views-field-field-stap-dept-name views-field-field-stap-dept-name-1">{member.department}</td>
                <td headers="view-field-stap-show-email-table-column" className="views-field views-field-field-stap-show-email views-field-field-stap-show-email-1">
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </td>
                <td headers="view-field-stap-show-telephone-table-column" className="views-field views-field-field-stap-show-telephone views-field-field-stap-show-telephone-1">
                  {member.telephone && member.telephoneHref && (
                    <a title="Telephone" href={member.telephoneHref}>{member.telephone}</a>
                  )}
                </td>
                <td headers="view-field-stap-surname-2-table-column" className="views-field views-field-field-stap-surname-2 views-field-field-stap-surname-3">{group.letter}</td>
              </tr>
            )),
          ])}
        </tbody>
      </table>
    </div>
  );
}
