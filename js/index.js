document.addEventListener('DOMContentLoaded', function() {
  // Get all cards in the row
  const cards = document.querySelectorAll('.row .navid');

  // Define the URLs to navigate to when cards are clicked
  const destinations = [
    'hopital.html',    // Health card
    'police.html', // Security card
    'pompier.html'  // Fire card
  ];

  // Add click event listeners to each card
  cards.forEach((card, index) => {
    card.style.cursor = 'pointer'; // Change cursor to indicate clickable

    card.addEventListener('click', function() {
      if (destinations[index]) {
        window.location.href = destinations[index];
      }
    });
  });
});