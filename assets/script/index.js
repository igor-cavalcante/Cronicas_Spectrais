
// menu mobile
// document.getElementById("menu-toggle").addEventListener("click", function () {
//     let mobileMenu = document.getElementById("mobile-menu");
//     mobileMenu.classList.toggle("hidden");
// });
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.getElementById('menuIcon');
const menuToggle = document.getElementById('menuToggle');
const navItems = document.querySelectorAll('.nav-links a'); // Seleciona todos os links dentro do menu

function onToggleMenu() {
    navLinks.classList.toggle('top-[8%]');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
}

// Adiciona evento para cada link do menu mobile
navItems.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu removendo a classe que o mantém visível
        navLinks.classList.remove('top-[8%]');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});


// button dropdownBtn
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    dropdownBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("opacity-0");
        dropdownMenu.classList.toggle("invisible");
        dropdownMenu.classList.toggle("scale-95");
    });

    // Fechar menu se clicar fora dele
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("opacity-0", "invisible", "scale-95");
        }
    });
});