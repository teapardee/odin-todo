export default class Task {
  constructor(title, description, date, priority, projectIndex, taskIndex) {
    this._title = title;
    this._description = description;
    this._date = date;
    this._priority = priority;
    this._projectIndex = projectIndex;
    this._taskIndex = taskIndex;
  }

  get taskTitle() {
    return this._title;
  }
}
