// Меню навигации
const body = document.querySelector('body');
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top');

navBtn.onclick = () => {
  navIcon.classList.toggle('nav-icon_active');
  nav.classList.toggle('header__top_mobile');
  body.classList.toggle('no-scroll');
}

// Маска для ввода телефона
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value == '+') input.value = '';
  })
  input.addEventListener('blur', () => {
    if (input.value == '+') input.value = '';
  })
})
