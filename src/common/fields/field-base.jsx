import './field-base.css';

import React, { Component } from 'react';

export default class FieldBase extends Component {

  field() {}

  render() {
    return (
      <div className={ `form-group${ this.props.className ? ` ${this.props.className}` : '' }` }>
        { this.label() }
        { this.fieldWrapper() }
        { this.errors() }
      </div>
    );
  }

  label() {
    const { label, input } = this.props;
    if (!label) return false;
    return <label className="control-label" htmlFor={ input.id ?? input.name }>{ label }</label>;
  }

  errors() {
    const { meta: { touched, error } } = this.props;
    if(!touched || !error) return;
    return <div className="invalid-feedback">{ this.props.meta.error }</div>
  }

  getFieldClasses() {
    const classes = ['form-control'];
    if (this.props.meta.touched)
      classes.push(this.props.meta.error ? 'is-invalid' : 'is-valid');
    return classes.join(' ');
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

  isRequired() {
    return this.props.meta.error === 'O campo é obrigatório';
  }
}
