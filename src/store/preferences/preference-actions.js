import { SET_PROJECT } from './preference-action-types';

export function setProject(project) { 
  return {
    type: SET_PROJECT,
    payload: project
  };
}
