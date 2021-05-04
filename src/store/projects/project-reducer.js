import { PROJECT_FETCHED, PROJECT_CREATED, PROJECT_UPDATED, PROJECT_DELETED } from './project-action-types';

export default function ProjectsReducer(state = null, action) {
  if (action.type === PROJECT_FETCHED) return action.payload;
  if (state === null) return state;

  switch(action.type) {
    case PROJECT_CREATED:
      state.unshift(action.payload);
      return state;
    case PROJECT_UPDATED:
      const index = state.findIndex(t => t.id === action.payload.id);
      state[index] = action.payload;
      return state;
    case PROJECT_DELETED:
      return state.filter(i => i.id !== action.payload.id);
    default: 
      return state;
  }
}
