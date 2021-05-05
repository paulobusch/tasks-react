import ActionsBase from '../actions-base';
import { setProject } from './../preferences/preference-actions';

class ProjectActions extends ActionsBase {
  constructor() {
    super('projects', 'PROJECT', 'project-form');
  }

  create(data, completed) {
    return [
      setProject(data.name),
      super.create(data, completed)
    ];
  }
}

const actionsInstance = new ProjectActions();

export function submitForm() { return actionsInstance.submitForm(); }
export function getAll(filters, completed) { return actionsInstance.getAll(filters, completed); }
export function getById(id, completed) { return actionsInstance.getById(id, completed); }
export function loadForm(id, completed) { return actionsInstance.loadForm(id, completed); }
export function create(data, completed) { return actionsInstance.create(data, completed); }
export function update(data, completed) { return actionsInstance.update(data, completed); }
export function remove(data, completed) { return actionsInstance.remove(data, completed); }
