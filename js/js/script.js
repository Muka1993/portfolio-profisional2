
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


// FUNÇÃO QUE VERIFICA A HORA E MANDA SAUDAÇÃO

var corpo = document.querySelector('body');

  function carregaTempo(){
  var text = document.querySelector('.textjs');
  var data = new Date();
  var hora = 16

  if(hora >=0 && hora < 12){
    text.innerHTML = 'bom dia';

  }else if(hora >= 12 && hora <= 18){
    text.innerHTML = 'boa tarde';

  }else{
    text.innerHTML = 'boa noite';
  } 
} 


// ANIMAÇÃO DO BOTÃO ENVIAR

let btnE = document.querySelector('.but-sub');
btnE.addEventListener('click', function(){
  btnE.innerHTML = 'Enviado';
});

btnE.addEventListener('mouseleave', function(){
  btnE.innerHTML = 'Enviar';
});

let butE = document.querySelector('form');
butE.addEventListener('submit', function(evento) {
  evento.preventDefault();
})


let menu = document.querySelector('.menu');

function clickMenu() {
  if(menu.style.display == 'none'){
  menu.style.display = 'block';
} else {
  menu.style.display = 'none';
}
}

function telaTamanho() {
  if(window.innerWidth >= '992'){
  menu.style.display = 'block';
} else {
  menu.style.display = 'none';
}
}


