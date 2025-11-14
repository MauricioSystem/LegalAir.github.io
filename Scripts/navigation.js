// Navigation and scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Cerrar sidebar después de hacer click en un link
            if (window.closeSidebar) {
                window.closeSidebar();
            }
            
            // Pequeño delay para asegurar que el sidebar se cierre primero
            setTimeout(() => {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const sectionTop = targetSection.offsetTop;
                    window.scrollTo({
                        top: sectionTop,
                        behavior: 'smooth'
                    });
                    updateActiveLink(link);
                }
            }, 300);
        });
    });

    // Función para actualizar el link activo
    function updateActiveLink(activeLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Actualizar link activo según scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Marcar el primer link como activo al cargar
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

