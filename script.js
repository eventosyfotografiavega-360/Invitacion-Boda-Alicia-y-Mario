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

// Ejecutar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();


// ==========================================
// 2. LÓGICA DE MÚSICA (Autoplay & Control)
// ==========================================

const musica = document.getElementById("miMusica");
const musicIcon = document.getElementById("music-icon");

// Función para pausar/reproducir manualmente
function toggleMusica() {
    if (musica.paused) {
        musica.play();
        musicIcon.innerText = "⏸️"; // Icono de pausa
    } else {
        musica.pause();
        musicIcon.innerText = "🎵"; // Icono de nota musical
    }
}

// TRUCO DE AUTOPLAY:
// Los navegadores bloquean la música automática. 
// Este código hará que suene en cuanto el invitado haga su PRIMER CLIC en la página.
document.addEventListener('click', function() {
    if (musica.paused) {
        musica.play();
        musicIcon.innerText = "⏸️";
    }
}, { once: true }); // El "{ once: true }" hace que esto solo pase la primera vez que den clic
