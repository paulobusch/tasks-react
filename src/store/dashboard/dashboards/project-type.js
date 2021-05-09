import moment from 'moment';
import _ from 'lodash';
import { sumReportHours } from './../../tasks/task-actions';

export default function getProjectType(tasks) {
  const tasksFiltred = tasks
    .map(task => {
      return { 
        type: task.type,
        project: task.project,
        duration: sumReportHours(task.timeReports)
      };
    });

  const tasksByTypeGroup = _.groupBy(tasksFiltred, 'type');
  const tasksByProjectGroup = _.groupBy(tasksFiltred, 'project');
  const result = {
    categories: Object.keys(tasksByTypeGroup),
    series: []
  };

  for (const project of Object.keys(tasksByProjectGroup)) {
    const tasksByProject = tasksByProjectGroup[project];
    const serie = { name: project, data: [] };
    
    for (const type of result.categories) {
      const tasksByType = tasksByProject.filter(t => t.type === type);
      const hours = tasksByType.map(t => t.duration).reduce((s, c) => s + c, 0);
      serie.data.push(parseFloat(hours.toFixed(1)));
    }

    result.series.push(serie);
  }

  return result;
}
