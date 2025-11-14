// Text animation - Letter by letter for hero section
document.addEventListener('DOMContentLoaded', () => {
    // Función para animar texto letra por letra
    function animateText(element, delay = 0) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(30px) rotateX(90deg)';
            span.style.transition = `opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delay + index * 0.05}s, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delay + index * 0.05}s`;
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0) rotateX(0deg)';
            }, 100);
        });
    }

    // Función para animar texto palabra por palabra
    function animateTextByWords(element, delay = 0) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        text.split(' ').forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '0.3em';
            wordSpan.style.opacity = '0';
            wordSpan.style.transform = 'translateY(30px)';
            wordSpan.style.transition = `opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay + wordIndex * 0.15}s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay + wordIndex * 0.15}s`;
            wordSpan.textContent = word;
            element.appendChild(wordSpan);
            
            setTimeout(() => {
                wordSpan.style.opacity = '1';
                wordSpan.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Animar título principal letra por letra
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        animateText(heroTitle, 0.3);
    }

    // Animar subtítulo palabra por palabra
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        animateTextByWords(heroSubtitle, 1.5);
    }
});

