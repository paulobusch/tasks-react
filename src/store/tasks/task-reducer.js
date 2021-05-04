import { TASK_FETCHED, TASK_CREATED, TASK_UPDATED, TASK_DELETED } from './task-action-types';

export default function TasksReducer(state = null, action) {
  if (action.type === TASK_FETCHED) return action.payload;
  if (state === null) return state;

  switch(action.type) {
    case TASK_CREATED:
      state.unshift(action.payload);
      return state;
    case TASK_UPDATED:
      const index = state.findIndex(t => t.id === action.payload.id);
      state[index] = action.payload;
      return state;
    case TASK_DELETED:
      return state.filter(i => i.id !== action.payload.id);
    default: 
      return state;
  }
}
