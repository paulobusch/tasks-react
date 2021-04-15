import { TYPE_FETCHED } from './TypesActionsTypes';

export default function TypesReducer(state = [], action) {
  switch(action.type) {
    case TYPE_FETCHED:
      return action.payload;
    default: 
      return state;
  }
}
