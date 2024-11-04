document.addEventListener('DOMContentLoaded', () => {
    const optionCards = document.querySelectorAll('.option-card');

    optionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'float 3s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', () => {
            card.style.animation = 'none';
        });
    });
});