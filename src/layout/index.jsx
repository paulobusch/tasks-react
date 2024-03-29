import './layout.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Toastr from './../common/messages/toastr/index';
import Header from './header';
import Content from './content';
import Sidenav from './sidenav';
import { bindActionCreators } from 'redux';
import { listenSessionChanged, logout } from '../store/auth/auth-actions';

class Layout extends Component {
  componentWillMount() {
    this.props.listenSessionChanged();
  }

  render() {
    const { loading, user } = this.props;
    if (loading) return false;
    if (!user) return <Redirect to="/login"/>;
    
    return (
      <div className="container-tasks">
        <Header logout={ this.props.logout }/>
        <div className="d-flex">
          <Sidenav />
          <Content>
            { this.props.children }
          </Content>
          <Toastr />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ listenSessionChanged, logout }, dispatch);
const mapStateToProps = state => ({ loading: state.auth.loading, user: state.auth.user });
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
