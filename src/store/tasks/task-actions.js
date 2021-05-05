import { toastr } from 'react-redux-toastr';
import moment from 'moment';

import ActionsBase from '../actions-base';
import { setProject } from './../preferences/preference-actions';
import { TASK_PLANNED, TASK_WORKING, TASK_FINISHED } from './task-status';

class TaskActions extends ActionsBase {
  constructor() {
    super('tasks', 'TASK', 'task-form');

    this.format = 'HH:mm';
  }

  create(data, completed) {
    const task = this.mapTask(data);
    return [
      setProject(task.project),
      super.create(task, completed)
    ];
  }

  update(data, completed) {
    const task = this.mapTask(data);
    return super.update(task, completed);
  }

  planned(data, completed) {
    data.status = TASK_PLANNED;
    return this.updateWithoutMessage(data, completed);
  }

  startWork(data, completed) {
    data.status = TASK_WORKING;
    data.timeReports = data.timeReports || [];
    const report = data.timeReports.find(r => !r.startAt || !r.endAt);
    const time = moment().format(this.format);
    if (report) report.startAt = time;
    else data.timeReports.push({ startAt: time });
    return this.updateWithoutMessage(this.mapTask(data), completed);
  }

  endWork(data, completed) {
    data.status = TASK_FINISHED;
    data.timeReports = data.timeReports || [];
    const report = data.timeReports.find(r => !r.startAt || !r.endAt);
    const time = moment().format(this.format);
    if (report) report.endAt = time;
    else data.timeReports.push({ endAt: time });
    return this.updateWithoutMessage(this.mapTask(data), completed);
  }

  mapTask(data) {
    data.timeReports = data.timeReports || [];
    data.timeReports = data.timeReports.filter(r => r.startAt || r.endAt);
    data.duration = this.sumTimeReports(data.timeReports);
    return data;
  }
  
  updateWithoutMessage(values, completed) {
    return dispatch => {
      this.getCollection()
        .doc(values.id)
        .update(values)
        .then(() => {
          dispatch({ type: `${this.prefixType}_UPDATED`, payload: values });
          if (completed) completed(true);
        })
        .catch((error) => {
          toastr.error('Erro', `Falha ao atualizar registro!`);
          if (completed) completed(false);
          throw error;
        });
    };
  }

  sumTimeReports(reports) {
    const format = 'HH:mm';
    const duration = reports
      .filter(r => r.startAt && r.endAt)
      .map(r => {
        const startAt = moment(r.startAt, format);
        const endAt = moment(r.endAt, format);
        if (!startAt.isValid() || !endAt.isValid()) return 0;
        return endAt.diff(startAt);
      })
      .reduce((s, i) => s + i, 0);
    if (duration === 0) return false;
    return moment.utc(duration).format(format);
  }
}

const actionsInstance = new TaskActions();

export function submitForm() { return actionsInstance.submitForm(); }
export function getAll(filters, completed) { return actionsInstance.getAll(filters, completed); }
export function getById(id, completed) { return actionsInstance.getById(id, completed); }
export function loadForm(id, completed) { return actionsInstance.loadForm(id, completed); }
export function planned(data, completed) { return actionsInstance.planned(data, completed); }
export function startWork(data, completed) { return actionsInstance.startWork(data, completed); }
export function endWork(data, completed) { return actionsInstance.endWork(data, completed); }
export function create(data, completed) { return actionsInstance.create(data, completed); }
export function update(data, completed) { return actionsInstance.update(data, completed); }
export function remove(data, completed) { return actionsInstance.remove(data, completed); }
export function sumTimeReports(reports) { return actionsInstance.sumTimeReports(reports); }
