import './dashboards.css';
import React, { Component } from 'react';

import Layout from '../../layout';
import DashboardTypeForDayWeek from './type-week/index';
import { loadAllTasks } from './../../store/dashboard/dashboard-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from './../../common/loading/index';
import DashboardProjectForMonthYear from './project-year/index';
import DashboardProjectForType from './project-type/index';

class Dashboard extends Component {  
  constructor(props) {
    super(props);

    this.state = { loading: true };
    this.afterLoad = this.afterLoad.bind(this);
  }

  componentDidMount() {
    this.props.loadAllTasks(this.afterLoad);
  }

  afterLoad(success) {
    if (success) this.toggleLoading(false);
  }

  toggleLoading(loading) {
    this.setState({
      ...this.state,
      loading: loading
    });
  }

  render() {
    const style = { display: this.props.data ? 'block' : 'none' };
    const data = this.props.data || { };
    return (
      <Layout>
        <div className="dashboards">
          { this.state.loading && <Loading /> }
          <div style={ style }>
            <DashboardTypeForDayWeek data={ data.typeWeek }/>
            <DashboardProjectForMonthYear data={ data.projectYear }/>
            <DashboardProjectForType data={ data.projectType }/>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ data: state.dashboard });
const mapDispatchToProps = dispatch => bindActionCreators({ loadAllTasks }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
