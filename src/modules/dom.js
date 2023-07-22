import Controller from './controller';

function addExpandListeners() {
  const expands = document.querySelectorAll('.expand');
  expands.forEach(function (btn) {
    btn.addEventListener('click', toggleDetails.bind(null, btn));
  });
}

function addEditListeners() {
  const edits = document.querySelectorAll('.edit');
  edits.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', toggleModal);

  const addTask = document.querySelector('.add-task');
  addTask.addEventListener('click', () => {
    toggleModal('add');
  });

  const submitTask = document.querySelector('.submit-btn');
  submitTask.addEventListener('click', () => {
    Controller.addTask();
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

function toggleModal(task) {
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.submit-btn');
  const formHeader = document.getElementById('form-header');

  if (task === 'add') {
    btn.innerHTML = 'ADD';
    formHeader.innerHTML = 'ADD TASK';
  } else {
    btn.innerHTML = 'APPLY';
    formHeader.innerHTML = 'EDIT TASK';
  }

  modal.classList.toggle('show-flex');
}

function renderTasks() {
  console.log('test');
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
  title.innerHTML = 'Task Test';

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

export { addExpandListeners, addEditListeners, renderTasks };
