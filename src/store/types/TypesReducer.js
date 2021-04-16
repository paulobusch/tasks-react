import { TYPE_FETCHED, TYPE_DELETED } from './TypesActionsTypes';

export default function TypesReducer(state = [], action) {
  switch(action.type) {
    case TYPE_FETCHED:
      return action.payload;
    case TYPE_DELETED:
      return state.filter(i => i.id !== action.payload);
    default: 
      return state;
  }
}
