import './layout.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Toastr from './../common/messages/toastr/index';
import Header from './header/header';
import Content from './content';
import Sidenav from './sidenav';

class Layout extends Component {
  render() {
    const { loading, user } = this.props;
    if (loading) return false;
    if (!user) return <Redirect to="/login"/>;
    
    return (
      <div className="container">
        <Header />
        <div className="row">
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

const mapStateToProps = state => ({ loading: state.auth.loading, user: state.auth.user });
export default connect(mapStateToProps)(Layout)
