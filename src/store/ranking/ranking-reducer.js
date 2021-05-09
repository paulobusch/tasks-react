import { RANKING_FETCHED } from "./ranking-action-types";
import getProjectYear from "./ranking-list/project-year";
import getTypeWeek from './ranking-list/type-week';

export default function RankingReducer(state = null, action) {
  switch(action.type) {
    case RANKING_FETCHED:
      const sorted = action.payload.sort((a, b) => a.createdAt - b.createdAt);
      return { 
        typeWeek: getTypeWeek(sorted),
        projectYear: getProjectYear(sorted)
      };
    default: 
      return state;
  }
}
