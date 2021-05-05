import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListBase from '../../../common/list-base';
import { TASK_WORKING, TASK_FINISHED, TASK_PLANNED } from './../../../store/tasks/task-status';
import { getAll, startWork, endWork, remove } from '../../../store/tasks/task-actions';

class TaskList extends ListBase {
  constructor(props) {
    super(props);

    this.title = 'Tarefas';
    this.className = 'project-list';
    this.afterChangeStatus = this.afterChangeStatus.bind(this);
  }

  changeStatus(task, status) {
    this.props.changeStatus(task, status, this.afterChangeStatus);
  }

  afterChangeStatus(success) {
    if (success) this.forceUpdate();
  }

  configure() {
    const { startWork, endWork } = this.props;

    this.actionsCount = 2;
    this.tableActions = [
      { icon: 'play', title: 'Iniciar', color: 'var(--primary)', 
        show: task => task.status === TASK_PLANNED, 
        click: task => startWork(task, this.afterChangeStatus)
      },
      { icon: 'check', title: 'Finalizar', color: 'green', 
        show: task => task.status === TASK_WORKING, 
        click: task => endWork(task, this.afterChangeStatus)
      },
      { icon: 'undo', title: 'Restaurar', color: 'orange', 
        show: task => task.status === TASK_FINISHED, 
        click: task => startWork(task, this.afterChangeStatus)
      },
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove.bind(this) }
    ];
    this.tableColumns = [
      { prop: 'project', label: 'Projeto', flex: 40 },
      { prop: 'type', label: 'Tipo', flex: 40 },
      { prop: 'duration', label: 'Duração', flex: 20 }
    ];
  }
}

const mapStateToProps = state => ({ list: state.tasks });
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, startWork, endWork, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
