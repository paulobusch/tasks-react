import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './auth/login';
import store from './store';
import Dashboard from './pages/dashboard/index';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/" component={ Dashboard }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
      </Router>
    </Provider>
  );
}
