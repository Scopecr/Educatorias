// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open', open);
  hamburger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Lightbox
const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCounter = document.getElementById('lightbox-counter');
let current = 0;

const images = Array.from(items).map(el => el.querySelector('img').src);
const total = images.length;

function openLightbox(index) {
  current = index;
  lbImg.src = images[current];
  lbCounter.textContent = (current + 1) + ' / ' + total;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}

function showNext() {
  current = (current + 1) % total;
  lbImg.src = images[current];
  lbCounter.textContent = (current + 1) + ' / ' + total;
}

function showPrev() {
  current = (current - 1 + total) % total;
  lbImg.src = images[current];
  lbCounter.textContent = (current + 1) + ' / ' + total;
}

items.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-next').addEventListener('click', showNext);
document.getElementById('lightbox-prev').addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
