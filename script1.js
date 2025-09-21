// Korosta aktiivinen navigaatiolinkki
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Hover-efekti taulukon riveille
document.querySelectorAll('table tbody tr').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = '#f8f9fa';
  });
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = '';
  });
});
