function addListeners() {
  const events = document.querySelectorAll('.expand');
  events.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.nextElementSibling.classList.toggle('show');
    });
  });
}

export default addListeners;
