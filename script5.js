// Korosta aktiivinen navigaatiolinkki
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Karusellin automaattinen pyöritys
const carouselElement = document.querySelector('#cafeCarousel');
if (carouselElement) {
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000, // 4 sekuntia per kuva
    ride: 'carousel'
  });
}
