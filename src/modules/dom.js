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
    console.log(task);
    btn.innerHTML = 'ADD';
    formHeader.innerHTML = 'ADD TASK';
  } else {
    btn.innerHTML = 'APPLY';
    formHeader.innerHTML = 'EDIT TASK';
  }

  modal.classList.toggle('show-flex');
}

export { addExpandListeners, addEditListeners };
