import moment from 'moment';
import _ from 'lodash';
import { sumReportHours } from './../../tasks/task-actions';

export default function getTypeWeek(tasks) {
  const tasksFiltred = tasks
    .filter(task => {
      return moment(task.createdAt).endOf('day').subtract(7, 'day');
    })
    .map(task => {
      return { 
        type: task.type,
        duration: sumReportHours(task.timeReports)
      };
    });


  const tasksByTypeGroup = _.groupBy(tasksFiltred, 'type');
  const hoursByType = [];
  for (const type in tasksByTypeGroup) {
    const tasksByType = tasksByTypeGroup[type];
    const hours = tasksByType.map(t => t.duration).reduce((s, c) => s + c, 0);
    hoursByType.push({ type, hours: parseFloat(hours.toFixed(1)) });
  }

  const topFiveTasks = hoursByType
    .sort((a, b) => b.hours - a.hours)
    .slice(0, 5);
  return {
    categories: topFiveTasks.map(t => t.type),
    bars: topFiveTasks.map(t => ({ name: t.type, y: t.hours }))
  };
}
