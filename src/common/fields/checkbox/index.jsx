import './checkbox.css';

import React from 'react';
import FieldBase from '../field-base';

export default class Checkbox extends FieldBase {
  render() {
    const { readOnly, input } = this.props;

    return (
      <div className={ `form-group${ this.props.className ? ` ${this.props.className}` : '' }` }>
        <div className="field-checkbox"> 
        
      <input { ...input }
        id={ input.id ?? input.name }
        required={ this.isRequired() }
        className={ this.getFieldClasses() }
        readOnly={ readOnly }
        type="checkbox">
      </input>
        { this.label() }
        </div>
        { this.errors() }
      </div>
    );
  }

  field() {
    const { readOnly, input, type, placeholder } = this.props;

    return (
      <input { ...input }
        id={ input.id ?? input.name }
        className={ this.getFieldClasses() }
        disabled={ readOnly } 
        placeholder={ placeholder } 
        type={ type }>
      </input>
    );
  }

  label() {
    const { label, input } = this.props;
    if (!label) return false;
    return <label className="form-check-label" htmlFor={ input.id ?? input.name }>{ label }</label>;
  }

  getFieldClasses() {
    const classes = ['form-check-input'];
    if (this.props.meta.touched)
      classes.push(this.props.meta.error ? 'is-invalid' : 'is-valid');
    return classes.join(' ');
  }
}
