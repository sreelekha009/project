const carousel = document.querySelector('.menu-carousel');
const cards = carousel.querySelectorAll('.menu-card');
const scrollInterval = 3000; // Adjust scroll interval (in milliseconds)

let currentCard = 0;

const scrollToNextCard = () => {
  currentCard = (currentCard + 1) % cards.length;
  carousel.scrollTo({
    left: currentCard * cards[0].offsetWidth,
    behavior: 'smooth'
  });
};

const startAutoScroll = () => {
  setInterval(scrollToNextCard, scrollInterval);
};

startAutoScroll();

// Optional: Disable auto-scroll on hover
carousel.addEventListener('mouseover', () => {
  clearInterval(startAutoScroll);
});

carousel.addEventListener('mouseout', () => {
  startAutoScroll();
});
