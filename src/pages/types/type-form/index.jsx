import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import Input from '../../../common/fields/input';
import FormBase from '../../../common/form-base/index';

class TypeForm extends FormBase {
  configure() {
    this.createMessage = 'Cadastro de Tipo';
  }

  form() {
    return (      
      <Form onSubmit={ () => {} } id="login-form" className="needs-validation">
        <Field component={ Input } type="text" name="name" label="Nome:" placeholder="Tipo de Tarefa"/>
      </Form>
    );
  }
}

export default reduxForm({ form: 'type-form' })(TypeForm);
