export default class Project {
  constructor(title) {
    this._title = title;
    this._projectTasks = [];
  }

  get title() {
    return this._title;
  }

  get tasks() {
    return this._projectTasks;
  }

  set tasks(value) {
    this._projectTasks.push(value);
  }

  get length() {
    return this._projectTasks.length;
  }
}
