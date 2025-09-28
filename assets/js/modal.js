(() => {
  const modal = document.getElementById('imgModal');
  const openLink = document.getElementById('openImage');
  const closeBtn = document.getElementById('closeModal');
  const body = document.querySelector('.modal__body');

  if (!modal || !openLink || !closeBtn || !body) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
  };

  // Open on click or Enter/Space (for accessibility)
  openLink.addEventListener('click', openModal);
  openLink.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });

  // Close actions
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Click outside the image (background or the box, not the image) to close
  modal.addEventListener('click', (e) => {
    const clickedInsideImage = e.target.tagName === 'IMG';
    if (!clickedInsideImage && (e.target === modal || e.target === body)) {
      closeModal();
    }
  });
})();