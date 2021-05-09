import moment from 'moment';
import _ from 'lodash';
import { sumReportHours } from './../../tasks/task-actions';

export default function getProjectYear(tasks) {
  const tasksFiltred = tasks
    .filter(task => {
      return moment(task.createdAt).endOf('month').subtract(12, 'month');
    })
    .map(task => {
      return { 
        project: task.project,
        month: moment(task.createdAt).format('MMM'),
        duration: sumReportHours(task.timeReports)
      };
    });

  const tasksByMonthGroup = _.groupBy(tasksFiltred, 'month');
  const tasksByProjectGroup = _.groupBy(tasksFiltred, 'project');
  const result = {
    categories: Object.keys(tasksByMonthGroup),
    series: []
  };

  for (const project of Object.keys(tasksByProjectGroup)) {
    const tasksByProject = tasksByProjectGroup[project];
    const serie = { name: project, data: [] };
    
    for (const month of result.categories) {
      const tasksByMonth = tasksByProject.filter(t => t.month === month);
      const hours = tasksByMonth.map(t => t.duration).reduce((s, c) => s + c, 0);
      serie.data.push(parseFloat(hours.toFixed(1)));
    }

    result.series.push(serie);
  }

  return result;
}
