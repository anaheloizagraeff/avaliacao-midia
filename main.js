function tocasom(idElemntoAudio){
    document.querySelector(idElemntoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){
const efeito = listaDeTeclas[contador].classList[1];
const idAudio = "#som_"+efeito;
listaDeTeclas[contador].onclick = function(){
    tocasom (idAudio)
}
   contador = contador +1;
   console.log(contador);
}