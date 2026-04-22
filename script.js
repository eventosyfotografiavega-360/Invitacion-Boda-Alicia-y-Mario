// 1. CONFIGURACIÓN DEL CONTADOR
const targetDate = new Date("August 22, 2026 19:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "¡LLEGÓ EL DÍA!";
        return;
    }

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
};

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// 2. ACTIVAR GALERÍA LIGHTBOX
window.onload = function() {
    new LuminousGallery(document.querySelectorAll(".galeria-item"));
};
