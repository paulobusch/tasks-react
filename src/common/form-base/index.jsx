import React, { Component } from 'react';
import Layout from '../../layout';
import SubmitButton from '../buttons/submit';

export default class FormBase extends Component { 
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.configure();
  }

  form() { }

  configure() { }

  render() {
    return (
      <Layout>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-baseline">
            <h3 className="h3 m-0">{ this.createMessage }</h3>
            <button type="button" title="Fechar" className="close" onClick={ this.goBack }>
              <span aria-hidden="true" className="h2">×</span>
            </button>
          </div>
          <div className="card-body">
            { this.form() }
          </div>
          <div className="card-footer d-flex justify-content-end">
            <SubmitButton>SALVAR</SubmitButton>
          </div>
        </div>
      </Layout>
    );
  }

  goBack() {
    const { history, location } = this.props;
    const { pathname } = location;
    const url = pathname.substring(0, pathname.search(/\/edit\/|\/new/));
    history.push(url);
  }
}
