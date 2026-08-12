// ─── ACTIVIDADES: RENDER DE GALERÍA + LIGHTBOX ───

function imgPath(albumId, filename) {
  return 'fotos/' + albumId + '/' + filename;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderAlbums() {
  const container = document.getElementById('albums-container');
  const albums = window.ALBUMS || [];

  if (albums.length === 0) {
    container.innerHTML =
      '<div class="albums-empty">' +
        '<div class="icon">📸</div>' +
        '<p>Muy pronto compartiremos fotos de nuestras actividades aquí. ¡Vuelve pronto!</p>' +
      '</div>';
    return;
  }

  container.innerHTML = '';
  albums.forEach((album, albumIndex) => {
    const block = document.createElement('div');
    block.className = 'album-block';

    const head = document.createElement('div');
    head.className = 'album-head';
    head.innerHTML =
      '<h3>' + escapeHtml(album.title || '') + '</h3>' +
      (album.date ? '<span class="album-date">' + escapeHtml(album.date) + '</span>' : '');
    block.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'album-grid';

    (album.images || []).forEach((filename, imgIndex) => {
      const thumb = document.createElement('div');
      thumb.className = 'album-thumb';

      const img = document.createElement('img');
      img.src = imgPath(album.id, filename);
      img.alt = album.title || 'Actividad';
      img.loading = 'lazy';

      thumb.appendChild(img);
      thumb.addEventListener('click', () => openLightbox(albumIndex, imgIndex));
      grid.appendChild(thumb);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

// ─── LIGHTBOX ───
let lbAlbumIndex = 0;
let lbImageIndex = 0;

function openLightbox(albumIndex, imgIndex) {
  lbAlbumIndex = albumIndex;
  lbImageIndex = imgIndex;
  showLightboxImage();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function showLightboxImage() {
  const albums = window.ALBUMS || [];
  const album = albums[lbAlbumIndex];
  if (!album) return;
  const filename = album.images[lbImageIndex];
  const img = document.getElementById('lightbox-img');
  img.src = imgPath(album.id, filename);
  img.alt = album.title || 'Actividad';
  document.getElementById('lightbox-caption').textContent =
    (album.title || '') + ' — ' + (lbImageIndex + 1) + ' / ' + album.images.length;
}

function lightboxNext() {
  const album = (window.ALBUMS || [])[lbAlbumIndex];
  if (!album) return;
  lbImageIndex = (lbImageIndex + 1) % album.images.length;
  showLightboxImage();
}

function lightboxPrev() {
  const album = (window.ALBUMS || [])[lbAlbumIndex];
  if (!album) return;
  lbImageIndex = (lbImageIndex - 1 + album.images.length) % album.images.length;
  showLightboxImage();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAlbums();

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', lightboxNext);
  document.getElementById('lightbox-prev').addEventListener('click', lightboxPrev);

  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
  });
});
