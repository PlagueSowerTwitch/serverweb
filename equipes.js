const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = slides.length;

// Fonction pour mettre à jour la position des images
function updateCarousel() {
    const width = carousel.clientWidth; // Largeur du conteneur
    carousel.style.transform = `translateX(${-width * currentSlide}px)`;
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Défilement automatique toutes les 5 secondes
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 5000);

// Met à jour le carrousel lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateCarousel);
