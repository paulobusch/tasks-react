import { applyMiddleware, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import { createStore } from 'redux';

import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import authReducer from './auth/auth-reducer';
import TypesReducer from './types/type-reducer';
import ProjectsReducer from './projects/project-reducer';
import TasksReducer from './tasks/task-reducer';
import PreferenceReducer from './preferences/preference-reducer';
import DashboardReducer from './dashboard/dashboard-reducer';
import RankingReducer from './ranking/ranking-reducer';

const store = combineReducers({
  toastr: toastrReducer,
  form: formReducer,
  dashboard: DashboardReducer,
  ranking: RankingReducer,
  preferences: PreferenceReducer,
  auth: authReducer,
  types: TypesReducer,
  projects: ProjectsReducer,
  tasks: TasksReducer
});

export default applyMiddleware(multi, thunk, promise)(createStore)(store);
