// menu.js — handles mobile menu toggle and site load logging

document.addEventListener("DOMContentLoaded", () => {
    console.log("Aweil School website loaded.");

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Toggle active class for CSS-based mobile menu
            nav.classList.toggle('active');
        });
    }
});
