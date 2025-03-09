// Toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const ctaButton = document.querySelector('.cta-button');

document.querySelector('.menu-toggle').addEventListener('click', () => {
  navLinks.classList.toggle('active');
  ctaButton.classList.toggle('active');
});
