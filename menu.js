// menu.js — handles responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function toggleMenu() {
  mainNav.classList.toggle('active');
}
