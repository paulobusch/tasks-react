import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import { createStore } from 'redux';

const store = combineReducers({
  toastr: toastrReducer,
  form: formReducer
});

export default createStore(store);
