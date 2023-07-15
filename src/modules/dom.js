function addListeners() {
  const events = document.querySelectorAll('.expand');
  events.forEach(function (btn) {
    btn.addEventListener('click', toggle.bind(null, btn));
  });
}

function toggle(btn) {
  btn.nextElementSibling.classList.toggle('show');
  if (btn.innerHTML === '▼') {
    btn.innerHTML = '▲';
  } else {
    btn.innerHTML = '▼';
  }
}

export default addListeners;
