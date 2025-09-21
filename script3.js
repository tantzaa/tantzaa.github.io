// Korosta aktiivinen navigaatiolinkki
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Näytä ilmoitus, kun käyttäjä klikkaa puhelin- tai sähköpostilinkkiä
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', () => {
    alert('Olet ottamassa yhteyttä Café Herkkulaan!');
  });
});
