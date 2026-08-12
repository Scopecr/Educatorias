// ─── HAMBURGER MENU (misma lógica que la página principal) ───
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});
