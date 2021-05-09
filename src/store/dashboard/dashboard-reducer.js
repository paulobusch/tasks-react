import { DASHBOARD_FETCHED } from "./dashboard-action-types";
import getTypeWeek from './dashboards/type-week';
import getProjectYear from './dashboards/project-year';
import getProjectType from "./dashboards/project-type";

export default function DashboardReducer(state = null, action) {
  switch(action.type) {
    case DASHBOARD_FETCHED:
      const sorted = action.payload.sort((a, b) => a.createdAt - b.createdAt);
      return { 
        typeWeek: getTypeWeek(sorted),
        projectYear: getProjectYear(sorted),
        projectType: getProjectType(sorted)
      };
    default: 
      return state;
  }
}
