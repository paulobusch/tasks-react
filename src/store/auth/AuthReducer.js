import { LOGIN, LOGOUT, LOADING } from './AuthActionTypes';

const INITIAL_STATE = {
  user: null, 
  loading: true
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOGIN:
      return { ...state, user: action.payload, loading: false };
    case LOGOUT:
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
}
