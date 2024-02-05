const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    const imagePath = this.getAttribute('data-image');
    const caption = this.getAttribute('data-caption');
    modalImage.src = imagePath;
    modalCaption.textContent = caption;
    modal.style.display = 'block';
  });
});

modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Keyboard navigation
window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    // Handle left arrow key press
  } else if (e.key === 'ArrowRight') {
    // Handle right arrow key press
  }
});