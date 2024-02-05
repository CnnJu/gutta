const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const modalNavigation = document.querySelector('.modal-navigation');
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  let currentIndex = 0;

  modalTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      currentIndex = index;
      updateModalContent();
      modal.style.display = 'block';
    });
  });

  function updateModalContent() {
    const currentTrigger = modalTriggers[currentIndex];
    const imagePath = currentTrigger.getAttribute('data-image');
    const caption = currentTrigger.getAttribute('data-caption');
    modalImage.src = imagePath;
    modalCaption.textContent = caption;
  }

  modalClose.addEventListener('click', closeModal);

  function closeModal() {
    modal.style.display = 'none';
  }

  modalNavigation.addEventListener('click', function (e) {
    if (e.target.classList.contains('prev')) {
      prevImage();
    } else if (e.target.classList.contains('next')) {
      nextImage();
    }
  });

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      updateModalContent();
    }
  }

  function nextImage() {
    if (currentIndex < modalTriggers.length - 1) {
      currentIndex++;
      updateModalContent();
    }
  }

  // Close modal when clicking outside the image
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  });