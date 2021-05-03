import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAll, remove } from '../../../store/types/type-actions';
import ListBase from '../../../common/list-base';

class TypeList extends ListBase {
  constructor(props) {
    super(props);

    this.title = 'Tipos';
    this.className = 'type-list';
  }

  configure() {
    this.tableActions = [
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove.bind(this) }
    ];
    this.tableColumns = [
      { prop: 'name', label: 'Nome', flex: 100 }
    ];
  }
  
  getList() {
    return this.props.types;
  }
}

const mapStateToProps = state => ({ types: state.types });
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TypeList);
