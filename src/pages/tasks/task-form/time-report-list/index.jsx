import './report-list.css';

import React, { Component } from 'react';
import { arrayInsert, arrayRemove } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TimeStartAt from './time-start-at';
import TimeEndAt from './time-end-at';
import Table from './../../../../common/table/index';
import { totalReportHoursFormatted } from './../../../../store/tasks/task-actions';

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
    
    const total = totalReportHoursFormatted(rows);
    return (
      <div className="time-report-list col-12">
        <fieldset>
          <div className="d-flex justify-content-between">
            <h4>Horas Reportadas</h4>
            { total && <h4>Total: { total }</h4> }
          </div>
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
