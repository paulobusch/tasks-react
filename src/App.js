import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './auth/login';
import store from './store';
import Layout from './layout/index';
import Dashboard from './pages/dashboard/index';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/" component={ Layout }>
          <Route path="dashboard" component={ Dashboard }/>
        </Route>
      </Router>
    </Provider>
  );
}
