import ActionsBase from '../actions-base';
import { toastr } from 'react-redux-toastr';

class TaskActions extends ActionsBase {
  constructor() {
    super('tasks', 'TASK', 'task-form');
  }
  
  changeStatus(values, status, completed) {
    return dispatch => {
      this.getCollection()
        .doc(values.id)
        .update({ status })
        .then(() => {
          dispatch({
            type: `${this.prefixType}_UPDATED`, 
            payload: { ...values, status } 
          });
          if (completed) completed(true);
        })
        .catch((error) => {
          toastr.error('Erro', `Falha ao atualizar status!`);
          if (completed) completed(false);
          throw error;
        });
    };
  }
}

const actionsInstance = new TaskActions();

export function submitForm() { return actionsInstance.submitForm(); }
export function getAll(filters, completed) { return actionsInstance.getAll(filters, completed); }
export function getById(id, completed) { return actionsInstance.getById(id, completed); }
export function loadForm(id, completed) { return actionsInstance.loadForm(id, completed); }
export function changeStatus(data, status, completed) { return actionsInstance.changeStatus(data, status, completed); }
export function create(data, completed) { return actionsInstance.create(data, completed); }
export function update(data, completed) { return actionsInstance.update(data, completed); }
export function remove(data, completed) { return actionsInstance.remove(data, completed); }
