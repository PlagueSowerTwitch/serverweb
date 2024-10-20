const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalImages = images.length;

// Fonction pour mettre à jour la position des images
function updateCarousel() {
    const width = carouselImages.clientWidth; // Largeur du conteneur
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

// Défilement automatique toutes les 5 secondes
setInterval(() => {
    index = (index + 1) % totalImages;
    updateCarousel();
}, 5000);

// Met à jour le carrousel lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateCarousel);



const quantitySelect = document.getElementById('quantity-select');
const priceDisplay = document.getElementById('price-display');

function updatePrice() {
    const selectedOption = quantitySelect.options[quantitySelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    priceDisplay.textContent = `Prix: ${price} €`;
}

// Écouteur d'événement pour détecter les changements dans le select
quantitySelect.addEventListener('change', updatePrice);

// Mettre à jour le prix au chargement initial
updatePrice();