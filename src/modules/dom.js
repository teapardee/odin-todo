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
}

function toggleDetails(btn) {
  btn.nextElementSibling.classList.toggle('show-grid');
  if (btn.innerHTML === '▼') {
    btn.innerHTML = '▲';
  } else {
    btn.innerHTML = '▼';
  }
}

function toggleModal() {
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.submit-btn');
  const closeBtn = document.getElementById('form-header');
  modal.classList.toggle('show-flex');
  btn.innerHTML = 'APPLY';
  closeBtn.innerHTML = 'EDIT TASK';
}

export { addExpandListeners, addEditListeners };
