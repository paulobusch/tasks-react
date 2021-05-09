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

  const tasksByProjectGroup = _.groupBy(tasksFiltred, 'project');
  const tasksByTypeGroup = _.groupBy(tasksFiltred, 'type');
  const result = {
    categories: Object.keys(tasksByProjectGroup),
    series: []
  };

  for (const type of Object.keys(tasksByTypeGroup)) {
    const tasksByType = tasksByTypeGroup[type];
    const serie = { name: type, data: [] };
    
    for (const project of result.categories) {
      const tasksByProject = tasksByType.filter(t => t.project === project);
      const hours = tasksByProject.map(t => t.duration).reduce((s, c) => s + c, 0);
      serie.data.push(parseFloat(hours.toFixed(1)));
    }

    result.series.push(serie);
  }

  return result;
}
