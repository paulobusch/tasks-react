import DashboardBase from '../dashboard-base';

export default class DashboardProjectForMonthYear extends DashboardBase {
  constructor(props) {
    super(props, 'chart-project-for-month-year', 'Projetos dos últimos 7 meses');
  }
}
