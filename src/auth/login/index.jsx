import './login.css';

import React, { Component } from 'react';
import { reduxForm, Form, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../../common/fields/input';
import Toastr from '../../common/messages/toastr';
import email from '../../common/validators/email';
import { login } from '../../store/auth/AuthActions';

class LoginForm extends Component {
  isValid() {
    const emailError = email(this.props.email);
    return this.props.email && !emailError && this.props.password;
  }

  render() {    
    const { handleSubmit, login } = this.props;
    
    return (
      <div className="container">
        <div className="row login justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card shadow">
              <div className="card-header bg-primary">
                <h3 className="text-center text-white">Login</h3>
              </div>
              <div className="card-body">
                <Form onSubmit={ handleSubmit(login) } id="login-form" className="needs-validation">
                  <Field component={ Input } type="email" name="email" label="Usuário:" placeholder="Seu email" icon="fas fa-user"/>
                  <Field component={ Input } type="password" name="password" label="Senha:" placeholder="Sua senha" icon="fas fa-lock"/>
                  <button disabled={ !this.isValid() } id="submit-login" className="btn btn-primary form-control" type="submit">Entrar</button>
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

const loginForm = reduxForm({ form: 'login-form' })(LoginForm);
const selector = formValueSelector('login-form');
const mapStateToProps = state => ({ 
  email: selector(state, 'email'), 
  password: selector(state, 'password') 
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
