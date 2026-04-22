// 1. CONFIGURACIÓN DEL CONTADOR (Mantenemos la fecha corregida)
const targetDate = new Date("March 18, 2027 17:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Elementos del HTML
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Verificar que los elementos existan antes de actualizar
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

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar una vez al inicio


// ==========================================
// 2. ACTIVAR GALERÍA LIGHTBOX (Forma Mejorada)
// ==========================================

// Usamos DomContentLoaded para asegurar que el HTML esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    // Buscamos todas las imágenes de la galería
    const galleryItems = document.querySelectorAll('.galeria-item');
    
    if (galleryItems.length > 0) {
        // Inicializamos LuminousGallery
        // Esto automáticamente agrega el fondo oscuro y permite cerrar al hacer clic
        new LuminousGallery(galleryItems);
        
        console.log("Galería Lightbox activada correctamente en Vega 360.");
    } else {
        console.error("No se encontraron elementos con la clase .galeria-item");
    }
});
