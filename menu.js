// menu.js — mobile nav toggle
function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    if (nav.style.display === 'block') {
        nav.style.display = '';
    } else {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.right = '16px';
        nav.style.top = '72px';
        nav.style.background = '#5E1F4C';
        nav.style.padding = '10px';
        nav.style.borderRadius = '8px';
        nav.style.zIndex = '1000';
    }
}
