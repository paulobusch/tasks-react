import './login.css';

import React, { Component } from 'react';
import { reduxForm, Form, Field } from 'redux-form';

import Input from '../../common/fields/input';
import Toastr from '../../common/messages/toastr';

class Login extends Component {
  render() {    
    return (
      <div className="container">
        <div className="row login justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card shadow">
              <div className="card-header bg-primary">
                <h3 className="text-center text-white">Login</h3>
              </div>
              <div className="card-body">
                <Form onSubmit={ ev => { } } id="login-form" className="needs-validation">
                  <Field component={ Input } type="email" name="email" label="Usuário:" placeholder="Seu email" icon="fas fa-user"/>
                  <Field component={ Input } type="password" name="password" label="Senha:" placeholder="Sua senha" icon="fas fa-lock"/>
                  <button id="submit-login" className="btn btn-primary form-control" type="submit">Entrar</button>
                </Form>
                <Toastr />
              </div>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'login-form' })(Login);
