export interface ViewsExposedFormProps {
  action: string;
  searchLabel?: string;
  searchPlaceholder?: string;
  submitLabel?: string;
  showDateFilter?: boolean;
  dateLabel?: string;
  isEventFilter?: boolean;
}

export function ViewsExposedForm({
  action,
  searchLabel = 'Search',
  searchPlaceholder = 'Search news',
  submitLabel = 'Apply',
  showDateFilter = false,
  dateLabel = 'Events from',
  isEventFilter = false,
}: ViewsExposedFormProps) {
  return (
    <form
      className={`views-exposed-form${isEventFilter ? ' dynamic-event-filter-form' : ''}`}
      action={action}
      method="get"
    >
      <div className="js-form-item form-item js-form-type-textfield form-item-combine js-form-item-combine">
        <label htmlFor="edit-combine">{searchLabel}</label>
        <input
          placeholder={searchPlaceholder}
          type="text"
          id="edit-combine"
          name="combine"
          defaultValue=""
          size={30}
          maxLength={128}
          className="form-text"
        />
      </div>
      {showDateFilter && (
        <div className="js-form-item form-item js-form-type-date form-item-field-edt-date-time-end-value js-form-item-field-edt-date-time-end-value">
          <label htmlFor="edit-field-edt-date-time-end-value">{dateLabel}</label>
          <input
            type="date"
            id="edit-field-edt-date-time-end-value"
            name="field_edt_date_time_end_value"
            defaultValue=""
            size={30}
            className="form-date"
          />
        </div>
      )}
      <div className="form-actions js-form-wrapper form-wrapper">
        <input
          className="success button radius js-form-submit form-submit"
          type="submit"
          value={submitLabel}
        />
      </div>
    </form>
  );
}
