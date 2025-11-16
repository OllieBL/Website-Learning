let clicks = 0;
const button = document.getElementById('clickMe');
const display = document.getElementById('clickCount');
const resetButton = document.getElementById('reset')

button.addEventListener('click', () => {
    clicks++;
    display.textContent = `Button clicks: ${clicks}`;
});

resetButton.addEventListener('click', () => {
    clicks = 0;
    display.textContent = `Button clicks: ${clicks}`;
})