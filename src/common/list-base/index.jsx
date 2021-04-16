import './list-base.css';

import React, { Component } from 'react';

import Table from '../../common/table';
import Layout from './../../layout/index';
import Modal from './../modal';
import FixedButton from '../buttons/fixed';

const INITIAL_STATE = { loading: true, loadingRemove: false, selected: null, showConfirmRemove: false };

export default class ListBase extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.closeModal = this.closeModal.bind(this);
    this.afterRemove = this.afterRemove.bind(this);
    this.afterLoad = this.afterLoad.bind(this);
    this.goNew = this.goNew.bind(this);
  }

  configure() { }
  
  getList() { }

  render() {
    this.configure();
    const list = this.getList();
    const modalActions = [
      { text: 'CANCELAR', style: 'secondary', click: this.closeModal.bind(this) },
      { text: 'REMOVER', style: 'danger', loading: this.state.loadingRemove, click: this.confirmRemove.bind(this) }
    ];
    return (
      <Layout>
        <div className="card">
          <div className="card-header">
            <h3 className="h3 m-0">{ this.title }</h3>
          </div>
          <div className="card-body p-0">
            <Table loading={ this.state.loading }
              rows={ list } columns={ this.tableColumns } actions={ this.tableActions }
            />
          </div>
        </div>
        <Modal title="Confirmação" 
          actions={ modalActions } show={ this.state.showConfirmRemove } 
          onClose={ this.closeModal }
        >
          Deseja realmente remover o registro?
        </Modal>
        <FixedButton title="Cadastrar" onClick={ this.goNew } icon="fas fa-plus"/>
      </Layout>
    );    
  }

  componentWillMount() {
    this.toggleLoading(true);
    this.props.getAll(this.afterLoad);
  }

  afterLoad(success) {
    if (success) this.toggleLoading(false);
  }

  confirmRemove() {
    this.toggleLoadingRemove(true);
    this.props.remove(this.state.selected.id, this.afterRemove);
  }
  
  afterRemove(success) {
    this.toggleLoadingRemove(false);
    if (success) {
      this.setState({ 
        ...this.state, 
        selected: null,
        showConfirmRemove: false 
      });
    }
  }

  toggleLoading(loading) {
    this.setState({ 
      ...this.state, 
      loading: loading
    });
  }

  toggleLoadingRemove(loading) {
    this.setState({ 
      ...this.state, 
      loadingRemove: loading
    });
  }

  closeModal() {
    this.setState({ ...this.state, showConfirmRemove: false });
  }

  remove(slide) {
    this.setState({ ...this.state, 
      selected: slide,
      showConfirmRemove: true
    });
  }

  goNew() {
    const { history, location } = this.props;
    const url = `${location.pathname}/new`;
    history.push(url);
  }
}
