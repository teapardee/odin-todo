import { controller } from './controller';
import Project from './project';
import Task from './task';

function addExpandListeners() {
  const expands = document.querySelectorAll('.expand');
  expands.forEach(function (btn) {
    btn.addEventListener('click', toggleDetails.bind(null, btn));
  });
}

function addEditListeners() {
  const editTask = document.querySelectorAll('#edit-task');
  editTask.forEach(function (btn) {
    btn.addEventListener('click', () => {
      toggleModal('edit', 'task');
    });
  });

  const editProject = document.querySelectorAll('#edit-project');
  editProject.forEach(function (btn) {
    btn.addEventListener('click', () => {
      toggleModal('edit', 'project');
    });
  });

  const closeProject = document.querySelector('#close-proj');
  closeProject.addEventListener('click', () => {
    toggleModal('', 'project');
  });

  const closeTask = document.querySelector('#close-task');
  closeTask.addEventListener('click', () => {
    toggleModal('', 'task');
  });

  const addTask = document.querySelector('.add-task');
  addTask.addEventListener('click', () => {
    toggleModal('add', 'task');
  });

  const addProject = document.querySelector('.add-project');
  addProject.addEventListener('click', () => {
    toggleModal('add', 'project');
  });

  const submitProject = document.getElementById('project-submit');
  submitProject.addEventListener('click', () => {
    controller.addProject();
  });

  const submitTask = document.getElementById('task-submit');
  submitTask.addEventListener('click', () => {
    controller.addProject();
  });
}

function toggleDetails(btn) {
  btn.nextElementSibling.classList.toggle('show-grid');
  if (btn.innerHTML === '▼') {
    btn.innerHTML = '▲';
  } else {
    btn.innerHTML = '▼';
  }
}

function toggleModal(task, target) {
  const btn = document.querySelector('.submit-btn');
  const formHeader = document.getElementById('form-header');

  if (task === 'add') {
    btn.innerHTML = 'ADD';
    formHeader.innerHTML = 'ADD TASK';
  } else {
    btn.innerHTML = 'APPLY';
    formHeader.innerHTML = 'EDIT TASK';
  }

  if (target === 'project') {
    let modal = document.getElementById('project-modal');
    modal.classList.toggle('show-flex');
  } else {
    let modal = document.getElementById('task-modal');
    modal.classList.toggle('show-flex');
  }
}

function renderProject(projectName) {
  const container = document.getElementById('project-container');
  const project = document.createElement('div');
  project.className = 'project';

  const title = document.createElement('h1');
  title.innerHTML = projectName;

  const addTask = document.createElement('div');
  addTask.className = 'add-task';
  addTask.innerHTML = 'Add Task +';

  project.appendChild(title);
  project.appendChild(addTask);
  container.appendChild(project);
}

function renderTask(_title) {
  const taskContainer = document.getElementById('task-container');

  const task = document.createElement('div');
  task.classList.add('task');

  const checkBox = document.createElement('div');
  checkBox.classList.add('checkbox-wrapper');
  checkBox.innerHTML = ` <input type="checkbox" id="cbx-43" />
  <label for="cbx-43" class="check">
    <svg width="18px" height="18px" viewBox="0 0 18 18">
      <path
        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
      ></path>
      <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
  </label>`;

  const priority = document.createElement('div');
  priority.classList.add('priority', 'green');
  const title = document.createElement('p');
  title.innerHTML = _title;

  const expand = document.createElement('div');
  expand.classList.add('expand');
  expand.innerHTML = '▼';

  const details = document.createElement('div');
  details.classList.add('task-details', 'hide');
  details.innerHTML = `<h2>DESCRIPTION:</h2>
    <p>This is the task description</p>
    <h2>PRIORITY:</h2>
    <p>Low</p>
    <h2>DATE ADDED:</h2>
    <p>12/31/25</p>
    <h2>DATE COMPLETED:</h2>
    <p>12/31/25</p>
    <img class="edit" alt="edit.svg" src="./edit.svg" />`;

  task.appendChild(checkBox);
  task.appendChild(priority);
  task.appendChild(title);
  task.appendChild(expand);
  task.appendChild(details);
  taskContainer.appendChild(task);
}

export {
  addExpandListeners,
  addEditListeners,
  renderTask,
  renderProject,
  toggleModal,
};
