import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../common/fields/input';
import FormBase from '../../../common/form-base/index';
import required from './../../../common/validators/required';
import { create, update, loadForm, submitForm } from './../../../store/types/type-actions';
import { connect } from 'react-redux';

class TypeForm extends FormBase {
  configure() {
    this.formId = 'type-form';
    this.createTitle = 'Cadastro de Tipo';
    this.updateTitle = 'Edição de Tipo';
  }

  fields() {
    return ( 
      <Fragment>
        <Field type="text" name="name" label="Nome:" placeholder="Informe o nome"
          component={ Input } validate={ required }/>
      </Fragment>     
    );
  }
}

const form = reduxForm({ form: 'type-form' })(TypeForm);
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, submitForm, loadForm }, dispatch);
export default connect(null, mapDispatchToProps)(form);
