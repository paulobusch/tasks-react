import { SET_PROJECT } from "./preference-action-types";

export default function PreferenceReducer(state = { }, action) {
  switch(action.type) {
    case SET_PROJECT:
      return { ...state, project: action.payload };
    default: 
      return state;
  }
}
