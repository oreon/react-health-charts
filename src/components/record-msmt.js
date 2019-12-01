import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <Field name="bp" component={renderField} label="Blood pressure" />
      </div>
      <div className="form-group">
        <Field name="sugar" component={renderField} label="Blood sugar" />
      </div>
      <div className="form-group">
        <Field name="steps" component={renderField} label="Steps walked" />
      </div>
      <div className="form-group">
        <Field name="comments" component={renderField} label="Comments" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}


export default FormCode = reduxForm({
  form: 'msmt'
})(FormCode);