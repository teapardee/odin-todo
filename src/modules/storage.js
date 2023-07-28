var storage = (function () {
  function saveProject(title, obj) {
    localStorage.setItem(title, JSON.stringify(obj));
  }

  function retrieveProject(title) {
    let project = JSON.parse(localStorage.getItem(title));
    return project;
  }

  function updateTaskArray(title, task) {
    let project = JSON.parse(localStorage.getItem(title));
    project._projectTasks.push(task);
    localStorage.setItem(title, JSON.stringify(project));
  }

  return {
    saveProject,
    retrieveProject,
    updateTaskArray,
  };
})();

export { storage };
