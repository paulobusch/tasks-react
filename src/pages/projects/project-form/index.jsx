import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../common/fields/input';
import FormBase from '../../../common/form-base/index';
import required from './../../../common/validators/required';
import { create, update, loadForm, submitForm } from './../../../store/projects/project-actions';
import { connect } from 'react-redux';

class ProjectForm extends FormBase {
  configure() {
    this.formId = 'project-form';
    this.createTitle = 'Cadastro de Projeto';
    this.updateTitle = 'Edição de Projeto';
  }

  fields() {
    return ( 
      <div className="row">
        <Field type="text" name="name" label="Nome" placeholder="Informe o nome"
          className="col-sm-12 col-md-6" component={ Input } validate={ required }/>
      </div> 
    );
  }
}

const form = reduxForm({ form: 'project-form' })(ProjectForm);
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, submitForm, loadForm }, dispatch);
export default connect(null, mapDispatchToProps)(form);
