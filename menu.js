// menu.js — simple mobile nav toggle
function toggleMenu(){
  const nav = document.querySelector('.main-nav');
  if(!nav) return;
  if(nav.style.display === 'block'){
    nav.style.display = '';
  } else {
    nav.style.display = 'block';
    nav.style.position = 'absolute';
    nav.style.right = '16px';
    nav.style.top = '72px';
    nav.style.background = 'var(--purple)';
    nav.style.padding = '10px';
    nav.style.borderRadius = '8px';
  }
}
