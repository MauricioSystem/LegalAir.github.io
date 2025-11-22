// Splash Screen - Logo animation on page load (1 second for blog)
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const body = document.body;

    if (splashScreen) {
        // Agregar clase para prevenir scroll durante el splash
        body.classList.add('splash-active');

        // Después de 1 segundo, iniciar la animación de desvanecimiento
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            
            // Remover el splash screen del DOM después de la animación
            setTimeout(() => {
                splashScreen.style.display = 'none';
                body.classList.remove('splash-active');
            }, 1500); // Tiempo de la animación de fade-out
        }, 1000); // 1 segundo de visualización
    }
});

