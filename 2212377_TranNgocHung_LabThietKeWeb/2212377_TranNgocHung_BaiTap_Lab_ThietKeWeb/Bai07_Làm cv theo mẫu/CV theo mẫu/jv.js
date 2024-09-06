// script.js

document.addEventListener('DOMContentLoaded', () => {
    const percentages = document.querySelectorAll('.percentage');

    percentages.forEach(percentage => {
        const targetValue = parseInt(percentage.dataset.value);
        let currentValue = 0;
        percentage.textContent = '0%';

        const updatePercentage = () => {
            if (currentValue < targetValue) {
                currentValue++;
                percentage.textContent = `${currentValue}%`;
                requestAnimationFrame(updatePercentage);
            }
        };

        updatePercentage();
    });
});
