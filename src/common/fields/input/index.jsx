import React from 'react';
import FieldBase from '../field-base';

export default class Input extends FieldBase {
  field() {
    const { readOnly, input, type, placeholder } = this.props;

    return (
      <input { ...input }
        id={ input.id ?? input.name }
        required={ this.isRequired() }
        className={ this.getFieldClasses() }
        disabled={ readOnly }
        placeholder={ placeholder } 
        type={ type }>
      </input>
    );
  }
}
