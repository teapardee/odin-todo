import Task from './task';
import Project from './project';
import { storage } from './storage';
import { renderProject, toggleModal } from './dom';

var controller = (function () {
  function addProject() {
    const projectName = document.getElementById('form-project');
    const newProject = new Project(projectName.value);
    storage.saveProject(newProject.title, newProject);
    toggleModal('add', 'project');
  }

  function editProject(e) {
    console.log(e);
    const projectName = document.getElementById('form-project');
  }

  function render() {
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      console.log(value._title);
      renderProject(value._title);
    }

    const container = document.getElementById('project-container');
    const addProj = document.createElement('div');
    addProj.className = 'add-project';
    addProj.innerHTML = 'Add Project +';

    container.appendChild(addProj);
    console.log(addProj);
  }

  return {
    addProject,
    render,
  };
})();

export { controller };
