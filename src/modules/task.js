export default class Task {
  constructor(title, description, date, priority, projectIndex, taskIndex) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.projectIndex = projectIndex;
    this.taskIndex = taskIndex;
  }
}
