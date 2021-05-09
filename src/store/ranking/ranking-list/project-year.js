import moment from 'moment';
import _ from 'lodash';
import { sumReportHours } from '../../tasks/task-actions';

export default function getProjectYear(tasks) {
  const now = new Date();
  const tasksFiltred = tasks
    .filter(task => {
      return moment(task.createdAt).add(12, 'month').isAfter(now, 'month');
    })
    .map(task => {
      return { 
        project: task.project,
        duration: sumReportHours(task.timeReports)
      };
    });

  const tasksByProjectGroup = _.groupBy(tasksFiltred, 'project');
  const hoursByProject = [];
  for (const project in tasksByProjectGroup) {
    const tasksByProject = tasksByProjectGroup[project];
    const hours = tasksByProject.map(t => t.duration).reduce((s, c) => s + c, 0);
    hoursByProject.push({ project, hours: parseFloat(hours.toFixed(1)) });
  }

  const topFiveTasks = hoursByProject
    .sort((a, b) => b.hours - a.hours)
    .slice(0, 5);
  return {
    categories: topFiveTasks.map(t => t.project),
    bars: topFiveTasks.map(t => ({ name: t.project, y: t.hours }))
  };
}
