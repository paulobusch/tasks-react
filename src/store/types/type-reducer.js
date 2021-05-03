import { TYPE_FETCHED, TYPE_CREATED, TYPE_UPDATED, TYPE_DELETED } from './type-action-types';

export default function TypesReducer(state = [], action) {
  switch(action.type) {
    case TYPE_FETCHED:
      return action.payload;
    case TYPE_CREATED:
      state.unshift(action.payload);
      return state;
    case TYPE_UPDATED:
      const index = state.indexOf(t => t.id === action.payload.id);
      state[index] = action.payload;
      return state;
    case TYPE_DELETED:
      return state.filter(i => i.id !== action.payload.id);
    default: 
      return state;
  }
}
