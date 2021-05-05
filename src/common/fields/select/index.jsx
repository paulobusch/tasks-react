import React from 'react';
import FieldBase from './../field-base';

export default class Select extends FieldBase {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  getOptions() {
    const options = this.props.options || [];
    const { input: { value } } = this.props;
    if (!value) options.unshift('Selecione...');
    return options;
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    if (e.target.value === 'Selecione...') {
      return onChange(null);
    }
    onChange(e.target.value);
  }

  field() {
    const { input, readOnly } = this.props;
    return (
      <select { ...input }
        id={ input.id ?? input.name }
        disabled={ readOnly } 
        required={ this.isRequired() }
        onChange={ this.onChange }
        className={ this.getFieldClasses() }>
        { this.getOptions().map((value, i) => <option key={ i } value={ value }>{ value }</option>) }
      </select>
    );
  }
}


