document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  const header = document.getElementById('main-header');
  
  // Make project cards clickable
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        const link = card.querySelector('a');
        if (link) {
          link.click();
        }
      }
    });
  });
  
  // Add blur effect to header when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}); 