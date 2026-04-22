const targetDate = new Date("March 18, 2027 17:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "<h3>¡LLEGÓ EL DÍA!</h3>";
            return;
        }
        daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }
};

setInterval(updateCountdown, 1000);
updateCountdown();
// LÓGICA DE MÚSICA
const musica = document.getElementById("miMusica");
const musicIcon = document.getElementById("music-icon");

function toggleMusica() {
    if (musica.paused) {
        musica.play();
        musicIcon.innerText = "⏸️";
    } else {
        musica.pause();
        musicIcon.innerText = "🎵";
    }
}

// Truco para reproducir al primer clic (Autoplay)
document.addEventListener('click', function() {
    if (musica.paused) {
        musica.play();
        musicIcon.innerText = "⏸️";
    }
}, { once: true }); // Solo se ejecuta una vez
