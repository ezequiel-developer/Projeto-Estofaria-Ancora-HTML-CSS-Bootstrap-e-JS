// Este evento é acionado quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todas as imagens da galeria
  var galleryImgs = document.querySelectorAll('.gallery-img')
  // Adiciona um evento de clique a cada imagem da galeria
  galleryImgs.forEach(function(img) {
      img.addEventListener('click', function() {
          // Obtém o índice do slide da imagem clicada
          var slideTo = this.getAttribute('data-slide-to')
          // Seleciona o elemento do carousel em tela cheia
          var fullscreenCarousel = document.getElementById('fullscreen-carousel')
          // Seleciona todos os slides do carousel em tela cheia
          var carouselSlides = fullscreenCarousel.querySelectorAll('.carousel-item')
          // Itera sobre todos os slides
          carouselSlides.forEach(function(slide, index) {
              // Adiciona a classe 'active' ao slide correspondente ao índice, remove dos outros
              if (index == slideTo) {
                  slide.classList.add('active')
              } else {
                  slide.classList.remove('active')
              }
          });
      });
  });
});

// Seleciona o botão de alternância do menu
const menuToggle = document.querySelector('.navbar-toggler')
// Seleciona o menu de navegação
const navbarMenu = document.querySelector('.navbar-collapse')
// Seleciona todos os itens de navegação
const navItems = document.querySelectorAll('.nav-item')

// Adiciona um evento de clique para cada item de navegação
navItems.forEach(function(navItem) {
  navItem.addEventListener('click', function () {
      // Remove a classe 'show' do menu quando um item de navegação é clicado
      navbarMenu.classList.remove('show')
  });
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', function (event) {
  // Verifica se o clique foi fora do menu
  const clickedOutsideMenu = !navbarMenu.contains(event.target)
  if (clickedOutsideMenu) {
      // Remove a classe 'show' do menu se o clique foi fora dele
      navbarMenu.classList.remove('show')
  }
});
