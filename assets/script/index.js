// --- 1. Função de Carregamento (Mantém o código limpo) ---
async function loadNavbar() {
    try {
        const response = await fetch('/assets/components/navbar.html');
        if (!response.ok) throw new Error("Falha ao carregar a navbar");

        const navbarHtml = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = navbarHtml;

        // --- 2. Inicializa os eventos APÓS o carregamento ---
        initNavbarEvents();
    } catch (error) {
        console.error("Erro ao carregar componente:", error);
    }
}

// --- 3. Inicialização dos Eventos ---
function initNavbarEvents() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menuIcon');
    const menuToggle = document.getElementById('menuToggle');
    const navItems = document.querySelectorAll('.nav-links a');

    // --- Abrir/Fechar Menu Mobile (Hambúrguer) ---
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o clique no botão dispare o evento de "clicar fora"
            navLinks.classList.toggle('top-[8%]');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });
    }

    // Fechar menu mobile ao clicar em links
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('top-[8%]');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');

            // Opcional: Fecha submenus abertos ao trocar de página
            document.getElementById('menuExplorar')?.classList.add('hidden');
            document.getElementById('menuPodcasts')?.classList.add('hidden');
        });
    });

    // --- Lógica de Submenus (Dropdowns) ---
    function initMobileDropdown(btnId, menuId) {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);

        if (btn && menu) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Toggle apenas em mobile (lg = 1024px)
                if (window.innerWidth < 1024) {
                    menu.classList.toggle('hidden');
                }
            });
        }
    }

    initMobileDropdown('explorarBtn', 'menuExplorar');
    initMobileDropdown('podcastsBtn', 'menuPodcasts');

    // --- Fechar menus ao clicar fora ---
    document.addEventListener('click', (e) => {
        // Fechar o menu principal mobile se clicar fora dele
        if (navLinks && navLinks.classList.contains('top-[8%]')) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('top-[8%]');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        }

        // Fechar submenus dropdowns se clicar fora
        if (window.innerWidth < 1024) {
            const menuExplorar = document.getElementById('menuExplorar');
            const menuPodcasts = document.getElementById('menuPodcasts');
            const btnExplorar = document.getElementById('explorarBtn');
            const btnPodcasts = document.getElementById('podcastsBtn');

            if (menuExplorar && btnExplorar && !menuExplorar.contains(e.target) && !btnExplorar.contains(e.target)) {
                menuExplorar.classList.add('hidden');
            }
            if (menuPodcasts && btnPodcasts && !menuPodcasts.contains(e.target) && !btnPodcasts.contains(e.target)) {
                menuPodcasts.classList.add('hidden');
            }
        }
    });
}

// --- Início ---
document.addEventListener('DOMContentLoaded', loadNavbar);