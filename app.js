const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', handleNav);

function handleNav() {
  if (!navToggle.classList.contains('nav--visible'))
    nav.classList.toggle('nav--visible');
}
