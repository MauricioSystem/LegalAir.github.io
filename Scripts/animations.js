// Animations using IntersectionObserver - Professional and Smooth
document.addEventListener('DOMContentLoaded', () => {
    // Configuración de observadores para animaciones
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    // Función para animar elementos con efecto suave
    const animateElement = (element, delay = 0) => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1)';
        element.style.transition = `opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`;
    };

    // Animación para imágenes de galería
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    entry.target.classList.add('animated');
                }, index * 100);
                imageObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach((img) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1), transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
        imageObserver.observe(img);
    });

    // Animación para tarjetas de abogados/equipo con efecto escalonado
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const lawyerCards = document.querySelectorAll('.lawyer-card');
    lawyerCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        card.style.transition = 'opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1), transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
        cardObserver.observe(card);
    });

    // Animación para tarjetas de áreas/servicios con efecto más suave
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.96)';
        card.style.transition = 'opacity 1.3s cubic-bezier(0.23, 1, 0.32, 1), transform 1.3s cubic-bezier(0.23, 1, 0.32, 1)';
        
        const areaCardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, (index % 3) * 150);
                    areaCardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        areaCardObserver.observe(card);
    });

    // Animación para títulos de sección
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                titleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        if (!title.style.opacity) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(30px)';
            title.style.transition = 'opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1), transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
            titleObserver.observe(title);
        }
    });

    // Animación para contenido de contacto
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                contactObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const contactElements = document.querySelectorAll('.contact-info');
    contactElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1), transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
        contactObserver.observe(element);
    });

    // Animación para botones de contacto uno por uno
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(30px) scale(0.8)';
        btn.style.transition = 'opacity 1s cubic-bezier(0.23, 1, 0.32, 1), transform 1s cubic-bezier(0.23, 1, 0.32, 1)';
        
        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                    buttonObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        buttonObserver.observe(btn);
    });
});

