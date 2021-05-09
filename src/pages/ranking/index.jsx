import './ranking.css';
import React, { Component } from 'react';

import Layout from '../../layout';
import { loadAllTasks } from './../../store/ranking/ranking-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from './../../common/loading/index';
import RankingTypeForDayWeek from './type-week';
import RankingProjectForYear from './project-year';

class Ranking extends Component {  
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
    const style = { display: this.props.data ? 'flex' : 'none' };
    const data = this.props.data || { };
    return (
      <Layout>
        <div className="ranking-list">
          { this.state.loading && <Loading /> }
          <div className="row" style={ style }>
            <RankingTypeForDayWeek className="col-sm-12 col-md-6" data={ data.typeWeek }/>
            <RankingProjectForYear className="col-sm-12 col-md-6" data={ data.projectYear }/>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ data: state.ranking });
const mapDispatchToProps = dispatch => bindActionCreators({ loadAllTasks }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
