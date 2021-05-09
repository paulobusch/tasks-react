import DashboardBase from '../dashboard-base';

export default class DashboardProjectForType extends DashboardBase {
  constructor(props) {
    super(props, 'chart-project-for-type', 'Atividades por Projeto', 'column');
  }
}
