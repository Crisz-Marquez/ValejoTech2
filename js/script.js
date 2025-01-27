// Seleccionamos los elementos principales del carrusel
const carouselInner = document.querySelector('.carousel__inner');
const prevButton = document.querySelector('.carousel__btn--prev');
const nextButton = document.querySelector('.carousel__btn--next');
const items = document.querySelectorAll('.carousel__item');

// Número total de imágenes en el carrusel
const totalItems = items.length;

// Índice actual del carrusel
let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
  const offset = currentIndex * -100; // Desplazamiento en porcentaje
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Evento para el botón "Prev"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Navegación cíclica
  updateCarousel();
});

// Evento para el botón "Next"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Navegación cíclica
  updateCarousel();
});
