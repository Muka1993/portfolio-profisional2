
// EVENTO QUE AO CLICAR NO MENU E NO BOTÃO FAZ A ROLAGEM ATÉ A ÁREA INDICADO PELO MENU 

window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//  FUNÇAO DO MENU HAMBURGUER

  function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

    
  }