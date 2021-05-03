import React, { Component } from 'react';
import Layout from '../../layout';
import SubmitButton from '../buttons/submit';
import Loading from './../loading/index';
import { Form } from 'redux-form';

export default class FormBase extends Component { 
  constructor(props) {
    super(props);

    this.state = { loading: false, saveLoading: false };
    this.submit = this.submit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.afterLoad = this.afterLoad.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
    this.id = this.getId();
  }

  configure() { }

  fields() { }

  componentWillMount() {
    this.configure();
    if (this.id) this.data = this.getData(this.id);
  }

  form() {
    const { handleSubmit, submitFailed, submitSucceeded } = this.props;

    return (      
      <Form onSubmit={ handleSubmit(this.submit) } 
        id={ this.formId } className={ submitFailed || submitSucceeded ? 'was-validated' : 'needs-validation' }>
        { this.fields() }
      </Form>
    );
  }

  render() {
    return (
      <Layout>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-baseline">
            <h3 className="h3 m-0">{ this.getTitle() }</h3>
            <button type="button" title="Fechar" className="close" onClick={ this.goBack }>
              <span aria-hidden="true" className="h2">×</span>
            </button>
          </div>
          <div className="card-body">
            { this.state.loading ? <Loading /> : this.form() }
          </div>
          <div className="card-footer d-flex justify-content-end">
            <SubmitButton loading={ this.state.saveLoading } onClick={ this.props.submitForm }>SALVAR</SubmitButton>
          </div>
        </div>
      </Layout>
    );
  }

  goBack() {
    this.props.history.goBack();
  }

  getId() {
    const { location } = this.props;
    const { pathname } = location;
    const regex = /\/edit\//;
    const index = pathname.search(regex);
    if (index === -1) return null;
    return pathname.substring(index).replace(regex, '');
  }

  getData(id) { 
    this.toggleLoading(true);
    this.props.loadForm(id, this.afterLoad);
  }

  afterLoad(success) {
    if (success) this.toggleLoading(false);
  }

  toggleLoading(loading) {
    this.setState({ 
      ...this.state, 
      loading: loading
    });
  }

  getTitle() {
    if (this.id) {
      if (this.state.loading)
        return 'Carregando...';
      else
        return this.updateTitle;
    }
    
    return this.createTitle;
  }

  submit(values) {
    this.toggleSaveLoading(true);
    if (this.id)
      this.props.update(values, this.afterSubmit);
    else
      this.props.create(values, this.afterSubmit);
  }
    
  afterSubmit(success) {
    this.toggleSaveLoading(false);
    if (success) this.goBack();
  }

  toggleSaveLoading(loading) {
    this.setState({ 
      ...this.state, 
      saveLoading: loading
    });
  }
}
