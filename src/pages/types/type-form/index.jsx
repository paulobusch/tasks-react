import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../common/fields/input';
import FormBase from '../../../common/form-base/index';
import required from './../../../common/validators/required';
import { create, update, loadForm, submitForm } from './../../../store/types/type-actions';
import { connect } from 'react-redux';
import Checkbox from './../../../common/fields/checkbox/index';

class TypeForm extends FormBase {
  configure() {
    this.formId = 'type-form';
    this.createTitle = 'Cadastro de Tipo';
    this.updateTitle = 'Edição de Tipo';
  }

  fields() {
    return ( 
      <div className="row">
        <Field type="text" name="name" label="Nome" placeholder="Informe o nome"
          className="col-sm-12 col-md-6" component={ Input } validate={ required }/>
        <Field type="checkbox" name="descriptionRequired" label="Descrição Obrigatória"
          className="col-sm-12 col-md-6" component={ Checkbox }/>
      </div>     
    );
  }
}

const form = reduxForm({ form: 'type-form' })(TypeForm);
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, submitForm, loadForm }, dispatch);
export default connect(null, mapDispatchToProps)(form);
