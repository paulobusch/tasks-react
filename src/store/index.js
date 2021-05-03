import { applyMiddleware, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import { createStore } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import authReducer from './auth/auth-reducer';
import TypesReducer from './types/type-reducer';

const store = combineReducers({
  toastr: toastrReducer,
  form: formReducer,
  auth: authReducer,
  types: TypesReducer
});

export default applyMiddleware(thunk, promise)(createStore)(store);
