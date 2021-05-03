import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Login from './auth/login';
import store from './store';
import Dashboard from './pages/dashboard/index';
import Blank from './pages/blank';
import TypeList from './pages/types/type-list/index';
import TypeForm from './pages/types/type-form/index';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/ranking" component={ Blank }/>
        <Route exact path="/types" component={ TypeList }/>
        <Route exact path="/types/new" component={ TypeForm }/>
        <Route exact path="/types/edit/:id" component={ TypeForm }/>
        <Route exact path="/tasks" component={ Blank }/>
        <Route exact path="/" render={ () => <Redirect to="/dashboard"/> }/>
      </Router>
    </Provider>
  );
}
