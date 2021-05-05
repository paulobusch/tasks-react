import './report-list.css';

import React, { Component } from 'react';
import { arrayInsert, arrayRemove } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TimeStartAt from './time-start-at';
import TimeEndAt from './time-end-at';
import Table from './../../../../common/table/index';

class TimeReportList extends Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  render() {
    this.tableColumns = [
      { prop: 'startAt', label: 'Hora Início', flex: 50, template: TimeStartAt },
      { prop: 'endAt', label: 'Hora Fim', flex: 50, template: TimeEndAt }
    ];
    
    this.tableActions = [
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove, show: report => !this.isMainReport(report) }
    ];
    
    const { rows } = this.props;
    if (!rows.some(report => !report.startAt || !report.endAt))
      rows.push({ startAt: '', endAt: '' });

    return (
      <div className="time-report-list col-sm-12 col-md-6">
        <fieldset>
          <legend>Horas Reportadas</legend>
          <Table rows={ rows } columns={ this.tableColumns } actions={ this.tableActions }/>
        </fieldset>
      </div>
    );
  }
  
  remove(row, index) {
    if (this.isMainReport(row)) return false;
    this.props.arrayRemove(this.props.formId, 'timeReports', index);
  }

  isMainReport(report) {
    if (this.props.rows.length === 1) return true;
    return !report.startAt || !report.endAt;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(TimeReportList); 
