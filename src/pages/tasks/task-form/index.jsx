import React from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import FormBase from '../../../common/form-base/index';
import required from './../../../common/validators/required';
import { create, update, loadForm, submitForm } from './../../../store/tasks/task-actions';
import { getAll as getAllTypes } from './../../../store/types/type-actions';
import { getAll as getAllProjects } from './../../../store/projects/project-actions';
import { connect } from 'react-redux';
import Select from './../../../common/fields/select/index';
import { Fragment } from 'react';
import Input from './../../../common/fields/input/index';
import TimeReportList from './time-report-list/index';

class TaskForm extends FormBase {
  constructor(props) {
    super(props);
    
    if (!this.id) {
      this.props.initialize({ project: null });
    }
  }

  componentWillMount() {
    this.props.getAllTypes();
    this.props.getAllProjects();
  }

  configure() {
    this.formId = 'task-form';
    this.createTitle = 'Cadastro de Tarefa';
    this.updateTitle = 'Edição de Tarefa';
  }

  fields() {
    const { descriptionRequired } = this.props;
    const { projects, types } = this.props;
    const descriptionValidators = [];
    const timeReports = this.props.timeReports || [];
    if (descriptionRequired) descriptionValidators.push(required);
    return ( 
      <Fragment>
        <div className="row">
          <Field name="project" label="Projeto" options={ projects }
            className="col-sm-12 col-md-6" component={ Select } validate={ required }/>
          <Field name="type" label="Tipo" options={ types }
            className="col-sm-12 col-md-6" component={ Select } validate={ required }/>
        </div>
        <div className="row">
          <Field name="description" label="Descrição" placeholder="Informe a descrição"
            className="col-12" component={ Input } validate={ descriptionValidators }/>
        </div>
        <div className="row">
          <TimeReportList formId="task-form" rows={ timeReports }/>
        </div>
      </Fragment>
    );
  }
}

const form = reduxForm({ form: 'task-form' })(TaskForm);
const selector = formValueSelector('task-form');
const mapStateToProps = state => {
  const type = selector(state, 'type');
  const types = (state.types || []);
  return ({ 
    types: types.map(p => p.name),
    projects: (state.projects || []).map(p => p.name),
    descriptionRequired: types.some(t => t.name === type) 
      ? types.find(t => t.name === type).descriptionRequired : false,
    timeReports: selector(state, 'timeReports')
  }); 
}
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, submitForm, loadForm, getAllTypes, getAllProjects }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(form);
