import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAll, remove } from '../../../store/projects/project-actions';
import ListBase from '../../../common/list-base';

class ProjectList extends ListBase {
  constructor(props) {
    super(props);

    this.title = 'Projetos';
    this.className = 'project-list';
  }

  configure() {
    this.tableActions = [
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove.bind(this) }
    ];
    this.tableColumns = [
      { prop: 'name', label: 'Nome', flex: 100 }
    ];
  }
}

const mapStateToProps = state => ({ list: state.projects });
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
