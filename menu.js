// menu.js — Mobile navigation toggle

function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    // Toggle mobile menu class
    nav.classList.toggle('mobile-active');
}

// Optional: Hide mobile menu on window resize if wider than 768px
window.addEventListener('resize', () => {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    if (window.innerWidth > 768) {
        nav.classList.remove('mobile-active');
    }
});
