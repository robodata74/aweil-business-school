// menu.js — mobile nav toggle
function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    // Toggle mobile menu class
    nav.classList.toggle('mobile-active');
}
