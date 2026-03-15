(() => {
  const triggers = document.querySelectorAll('.popup-link');

  triggers.forEach(trigger => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal__close');
    const videos = modal.querySelectorAll('video');

    const openModal = (e) => {
      e.preventDefault();
      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');

      videos.forEach(video => {
        video.muted = false;
        video.play().catch(() => {});
      });
    };

    const closeModal = () => {
      modal.classList.remove('is-visible');
      modal.setAttribute('aria-hidden', 'true');

      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      });
    };

    trigger.addEventListener('click', openModal);

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
        closeModal();
      }
    });
  });
})();