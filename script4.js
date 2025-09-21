// Korosta aktiivinen navigaatiolinkki
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Hover-efekti arvojen kortteihin
document.querySelectorAll('.col-md-4 .border').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = '#e9ecef';
    card.style.transition = 'background-color 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '';
  });
});
