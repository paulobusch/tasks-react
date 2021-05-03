import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import Input from '../../../common/fields/input';
import FormBase from '../../../common/form-base/index';
import required from './../../../common/validators/required';

class TypeForm extends FormBase {
  configure() {
    this.createMessage = 'Cadastro de Tipo';
  }

  form() {
    return (      
      <Form onSubmit={ () => {} } id="login-form" className="needs-validation">
        <Field type="text" name="name" label="Nome:" placeholder="Informe o nome"
          component={ Input } validate={ required }/>
      </Form>
    );
  }
}

export default reduxForm({ form: 'type-form' })(TypeForm);
