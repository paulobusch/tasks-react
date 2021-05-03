import { TYPE_FETCHED, TYPE_CREATED, TYPE_UPDATED, TYPE_DELETED } from './type-action-types';

export default function TypesReducer(state = null, action) {
  if (action.type === TYPE_FETCHED) return action.payload;
  if (state === null) return state;

  switch(action.type) {
    case TYPE_CREATED:
      state.unshift(action.payload);
      return state;
    case TYPE_UPDATED:
      const index = state.findIndex(t => t.id === action.payload.id);
      state[index] = action.payload;
      return state;
    case TYPE_DELETED:
      return state.filter(i => i.id !== action.payload.id);
    default: 
      return state;
  }
}
