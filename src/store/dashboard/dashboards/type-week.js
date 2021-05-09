import moment from 'moment';
import _ from 'lodash';
import { sumReportHours } from './../../tasks/task-actions';

export default function getTypeWeek(tasks) {
  const now = new Date();
  const tasksFiltred = tasks
    .filter(task => {
      return moment(task.createdAt).add(7, 'day').isAfter(now, 'day');
    })
    .map(task => {
      return { 
        type: task.type,
        dayOfWeek: moment(task.createdAt).format('DD/MM - dddd'),
        duration: sumReportHours(task.timeReports)
      };
    });

  const tasksByWeekGroup = _.groupBy(tasksFiltred, 'dayOfWeek');
  const tasksByTypeGroup = _.groupBy(tasksFiltred, 'type');
  const result = {
    categories: Object.keys(tasksByWeekGroup),
    series: []
  };

  for (const type of Object.keys(tasksByTypeGroup)) {
    const tasksByType = tasksByTypeGroup[type];
    const serie = { name: type, data: [] };
    
    for (const day of result.categories) {
      const tasksByDay = tasksByType.filter(t => t.dayOfWeek === day);
      const hours = tasksByDay.map(t => t.duration).reduce((s, c) => s + c, 0);
      serie.data.push(parseFloat(hours.toFixed(1)));
    }

    result.series.push(serie);
  }

  return result;
}
