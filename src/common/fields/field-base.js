import './field-base.css';

import React, { Component } from 'react';

export default class FieldBase extends Component {
  render() {
    return (
      <div className="form-group">
        { this.label() }
        { this.fieldWrapper() }
        { this.errors() }
      </div>
    );
  }

  label() {
    const { label, id, name } = this.props;
    if (!label) return false;
    return <label className="control-label" htmlFor={ id ?? name }>{ label }</label>;
  }

  errors() {
    const { meta: { touched, error } } = this.props;
    if (!touched || !error) return false;
    return <div className="invalid-feedback">{ error }</div>
  }

  fieldWrapper() {
    const { icon } = this.props;
    const field = this.field();
    if (!icon) return field;
    return (
      <div className="field-with-icon">
        <i className={ icon }></i>
        { field }
      </div>
    );
  }

  field() {}
}
