export default class Project {
  constructor(title, projectIndex) {
    this.title = title;
    this.projectIndex = projectIndex;
  }

  set title(value) {
    return (this.title = value);
  }
}
