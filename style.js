/*Popup Promotion*/
const promoButton = document.querySelector('.promo-btn');
const popup = document.getElementById('promo-popup');
const closePopup = document.getElementById('close-popup');
const countdownDisplay = document.getElementById('countdown');
let countdownInterval;

function startCountdown() {
    const randomHours = Math.floor(Math.random() * 48);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    let totalSeconds = (randomHours * 3600) + (randomMinutes * 60) + randomSeconds;

    countdownDisplay.textContent = `${Math.floor(totalSeconds / 3600)}h ${Math.floor((totalSeconds % 3600) / 60)}m ${totalSeconds % 60}s`; // Affiche le temps initial

    countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Temps écoulé !";
        } else {
            totalSeconds--;
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            countdownDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

promoButton.addEventListener('click', () => {
    if (popup.style.display !== 'flex') {
        popup.style.display = 'flex';
        startCountdown();
    }
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "";
});

/*Popup Langues*/
const langButton = document.querySelector('.lang-btn');
const langPopup = document.getElementById('language-popup');
const closeLangPopup = document.getElementById('close-lang-popup');

// Affiche le popup des langues
langButton.addEventListener('click', () => {
    langPopup.style.display = 'flex';
});

// Ferme le popup des langues
closeLangPopup.addEventListener('click', () => {
    langPopup.style.display = 'none';
});

// Gestion des options de langue
const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        alert(`Langue sélectionnée : ${selectedLang}`); // Remplacez ceci par votre logique de changement de langue
        langPopup.style.display = 'none';
    });
});
