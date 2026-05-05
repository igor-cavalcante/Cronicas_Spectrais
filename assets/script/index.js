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
        menuToggle.addEventListener('click', () => {
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

    // Fecha submenus se clicar fora
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024) {
            const menuExplorar = document.getElementById('menuExplorar');
            const menuPodcasts = document.getElementById('menuPodcasts');
            
            if (menuExplorar && !menuExplorar.contains(e.target) && !document.getElementById('explorarBtn').contains(e.target)) {
                menuExplorar.classList.add('hidden');
            }
            if (menuPodcasts && !menuPodcasts.contains(e.target) && !document.getElementById('podcastsBtn').contains(e.target)) {
                menuPodcasts.classList.add('hidden');
            }
        }
    });
}

// --- Início ---
document.addEventListener('DOMContentLoaded', loadNavbar);