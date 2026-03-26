export interface StapContactProps {
  email: string;
  telephone?: string;
}

export function StapContact({ email, telephone }: StapContactProps) {
  return (
    <dl className="stap-contact">
      <dt className="sr-only">Email</dt>
      <dd>
        <strong>
          <a href={`mailto:${email}`}>{email}</a>
        </strong>
      </dd>
      {telephone && (
        <>
          <dt className="sr-only">Telephone</dt>
          <dd>
            <strong className="telnum">
              <a href={`tel:${telephone}`}>{telephone}</a>
            </strong>
          </dd>
        </>
      )}
    </dl>
  );
}
