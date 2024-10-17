const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
const totalImages = images.length;

// Fonction pour mettre à jour la position des images
function updateCarousel() {
    const width = images[index].clientWidth;
    carouselImages.style.transform = `translateX(${-width * index}px)`;
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

// Défilement automatique toutes les 3 secondes, pas obligatoire à mettre
setInterval(() => {
    index = (index + 1) % totalImages;
    updateCarousel();
}, 3000);

window.addEventListener('resize', updateCarousel);