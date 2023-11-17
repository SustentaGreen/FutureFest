document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
  
    links.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  
    function scrollToSection(event) {
      event.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('.nav-bar').offsetHeight,
          behavior: 'smooth'
        });
  
        // Adiciona a classe 'fixed-header' ao header
        const header = document.querySelector('header');
        header.classList.add('fixed-header');
      }
  
      // Fecha o menu móvel após clicar em um link
      const mobileMenu = document.querySelector('.mobile-menu');
      mobileMenu.classList.remove('open');
  
      // Restaura o ícone do menu móvel para o padrão
      const mobileMenuIcon = document.querySelector('.mobile-menu-icon button img');
      mobileMenuIcon.src = 'assets/img/menu_white_36dp.svg';
    }
  
    const mobileMenuButton = document.querySelector('.mobile-menu-icon button');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
    function toggleMobileMenu() {
      const mobileMenu = document.querySelector('.mobile-menu');
      mobileMenu.classList.toggle('open');
  
      // Altera dinamicamente o ícone do menu móvel entre o ícone do menu e o ícone 'X'
      const mobileMenuIcon = document.querySelector('.mobile-menu-icon button img');
      const isMenuOpen = mobileMenu.classList.contains('open');
      mobileMenuIcon.src = isMenuOpen ? 'assets/img/close_white_36dp.svg' : 'assets/img/menu_white_36dp.svg';
    }
  });

  function smoothScroll(target) {
    var targetElement = document.querySelector(target);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Ocultar o menu móvel após clicar em um link
        var mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.remove('show');
    }
}

// Adiciona um ouvinte de evento a cada link do menu
var links = document.querySelectorAll('.nav-link');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        var target = this.getAttribute('href');
        smoothScroll(target);
    });
});

setTimeout(function() {
    smoothScroll(target);
}, 300);

