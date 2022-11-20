
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

// DARK MODE

var boton = document.getElementById('buttone');
var documento = document.querySelector('body');
boton.addEventListener('click', () => {
  boton.classList.toggle('active');
  documento.classList.toggle('dark');
});

// ANIMAÇÃO DO BOTÃO ENVIAR

let btnE = document.querySelector('.text-bg-danger');
btnE.addEventListener('click', function(){
  btnE.innerHTML = 'Enviado';
});

btnE.addEventListener('mouseleave', function(){
  btnE.innerHTML = 'Enviar';
});



