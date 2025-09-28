(() => {
  const triggers = document.querySelectorAll('.popup-link');

  triggers.forEach(trigger => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.modal__close');

    const openModal = (e) => {
      e.preventDefault();
      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
      modal.classList.remove('is-visible');
      modal.setAttribute('aria-hidden', 'true');
    };

    trigger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking dark background
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Close with Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
        closeModal();
      }
    });
  });
})();