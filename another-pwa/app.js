// Add this to the top of your app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered!', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

let clicks = 0;
let deferredPrompt;
const button = document.getElementById('clickMe');
const display = document.getElementById('clickCount');
const resetButton = document.getElementById('resetButton')

button.addEventListener('click', () => {
    console.log('You clikced a button!!')
    clicks++;
    display.textContent = `Button clicks: ${clicks}`;
});
resetButton.addEventListener('click', () => {
    clicks = 0;
    display.textContent = `Button clicks: ${clicks}`;
})



window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome from automatically showing prompt
    event.preventDefault();
    
    // Show install button
    const installBtn = document.getElementById('installBtn');
    installBtn.style.display = 'block';
    
    installBtn.addEventListener('click', () => {
        // Show install prompt
        event.prompt();
        
        // Hide install button
        installBtn.style.display = 'none';
    });
});