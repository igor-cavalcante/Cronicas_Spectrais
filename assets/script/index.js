
//Configrando navbar
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.getElementById('menuIcon');
const menuToggle = document.getElementById('menuToggle');
const navItems = document.querySelectorAll('.nav-links a'); // Seleciona todos os links dentro do menu

function onToggleMenu() {
    navLinks.classList.toggle('top-[8%]');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
}

// dropdown de lançamento
const lancamentosToggle = document.getElementById('lancamentosToggle');
      const submenuLancamentos = document.getElementById('submenuLancamentos');
    
      lancamentosToggle.addEventListener('click', (e) => {
        e.preventDefault(); // evita redirecionamento
        submenuLancamentos.classList.toggle('hidden');
      });
    
      // Opcional: fecha ao clicar fora do menu
      document.addEventListener('click', function (e) {
        if (
          !lancamentosToggle.contains(e.target) &&
          !submenuLancamentos.contains(e.target)
        ) {
          submenuLancamentos.classList.add('hidden');
        }
      });



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

// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownBtn = document.getElementById("dropdownBtn");
//     const dropdownMenu = document.getElementById("dropdownMenu");

//     dropdownBtn.addEventListener("click", function () {
//         dropdownMenu.classList.toggle("opacity-0");
//         dropdownMenu.classList.toggle("invisible");
//         dropdownMenu.classList.toggle("scale-95");
//     });

//     // Fechar menu se clicar fora dele
//     document.addEventListener("click", function (event) {
//         if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
//             dropdownMenu.classList.add("opacity-0", "invisible", "scale-95");
//         }
//     });
// });


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             window.scrollTo({
//                 top: target.offsetTop - 60, // Ajuste para compensar a navbar fixa
//                 behavior: 'smooth'
//             });
//         }
//     });
// });



//função de ler mais 

// document.getElementById("readMoreBtn").addEventListener("click", function() {
//     var moreText = document.getElementById("moreText");
//     var btn = document.getElementById("readMoreBtn");

//     if (moreText.classList.contains("hidden")) {
//       moreText.classList.remove("hidden");
//       btn.innerText = "Ler menos";
//     } else {
//       moreText.classList.add("hidden");
//       btn.innerText = "Ler mais...";
//     }
//   });