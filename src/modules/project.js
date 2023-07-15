export default class Project {
  constructor(title) {
    this._title = title;
    this._projectTasks = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get projectTasks() {
    return this._projectTasks;
  }

  set projectTasks(value) {
    this._projectTasks.push(value);
  }
}
