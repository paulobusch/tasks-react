import './list-base.css';

import React, { Component } from 'react';

import Table from '../../common/table';
import Layout from './../../layout/index';

const INITIAL_STATE = { loading: true };

export default class ListBase extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.afterLoad = this.afterLoad.bind(this);
  }

  componentWillMount() {
    this.toggleLoading(true);
    this.props.getAll(this.afterLoad);
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

  configure() { }
  
  getList() { }

  render() {
    this.configure();
    const list = this.getList();
    return (
      <Layout>
        <h2 className="border-bottom pb-3">{ this.title }</h2>
        <Table loading={ this.state.loading }
          rows={ list } columns={ this.tableColumns }
        />
      </Layout>
    );    
  }
}
