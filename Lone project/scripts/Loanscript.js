const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const slider = document.getElementById('reviewSlider');
const cards = slider.getElementsByClassName('review-card');
const totalCards = cards.length;
let currentIndex = 0;
let visibleCards;

function updateVisibleCards() {
    const width = window.innerWidth;
    if (width <= 700) {
        visibleCards = 1;
    } else if (width <= 880) {
        visibleCards = 2;
    } else {
        visibleCards = 3;
    }
}

updateVisibleCards();

function getSlideDistance() {
    const card = cards[0];
    return card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
}

function updateSlider() {
    const distance = getSlideDistance();
    slider.style.transform = `translateX(-${currentIndex * distance}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateSlider();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

window.addEventListener('resize', updateVisibleCards);