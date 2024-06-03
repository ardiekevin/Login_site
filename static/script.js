function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('.clock .hours').textContent = String(hours).padStart(2, '0');
    document.querySelector('.clock .minutes').textContent = minutes;
    document.querySelector('.clock .seconds').textContent = seconds;
}

document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    });

    loadingScreen.addEventListener('transitionend', function() {
        if (loadingScreen.classList.contains('hidden')) {
            loadingScreen.remove();
        }
    });

    setInterval(updateClock, 1000);
    updateClock();
});
