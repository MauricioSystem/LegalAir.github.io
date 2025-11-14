// Sidebar functionality
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Función para abrir sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        if (menuToggle) {
            menuToggle.classList.add('hidden');
        }
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('hidden');
        }
        document.body.style.overflow = '';
    }

    // Abrir/cerrar sidebar con el botón
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    // Cerrar sidebar al hacer click en el overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            closeSidebar();
        });
    }

    // Prevenir que el click dentro del sidebar cierre el sidebar
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Exportar funciones para uso en otros módulos
    window.closeSidebar = closeSidebar;
});

