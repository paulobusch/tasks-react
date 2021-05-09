import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Login from './auth/login';
import store from './store';
import Dashboard from './pages/dashboard/index';
import Ranking from './pages/ranking/index';
import TypeList from './pages/types/type-list/index';
import TypeForm from './pages/types/type-form/index';
import ProjectList from './pages/projects/project-list/index';
import ProjectForm from './pages/projects/project-form/index';
import TaskList from './pages/tasks/task-list/index';
import TaskForm from './pages/tasks/task-form';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/ranking" component={ Ranking }/>
        <Route exact path="/tasks" component={ TaskList }/>
        <Route exact path="/tasks/new" component={ TaskForm }/>
        <Route exact path="/tasks/edit/:id" component={ TaskForm }/>
        <Route exact path="/types" component={ TypeList }/>
        <Route exact path="/types/new" component={ TypeForm }/>
        <Route exact path="/types/edit/:id" component={ TypeForm }/>
        <Route exact path="/projects" component={ ProjectList }/>
        <Route exact path="/projects/new" component={ ProjectForm }/>
        <Route exact path="/projects/edit/:id" component={ ProjectForm }/>
        <Route exact path="/" render={ () => <Redirect to="/dashboard"/> }/>
      </Router>
    </Provider>
  );
}
