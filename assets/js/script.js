window.addEventListener('DOMContentLoaded', () => {
  const images = [...document.querySelectorAll('.image-fade')];
  const baseDelay = 500;

  // เรียงลำดับตาม data-sequence
  images
    .sort((a, b) => a.dataset.sequence - b.dataset.sequence)
    .forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('opacity-100', 'translate-y-0');
      }, index * baseDelay);
    });
});
