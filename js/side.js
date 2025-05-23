document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.row .card');

  cards.forEach((card, index) => {
    // The correct way to set a CSS custom property
    card.style.setProperty('--card-index', index);

    // Make card clickable if needed
    card.style.cursor = 'pointer';
  });
});