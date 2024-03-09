import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener los elementos
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar evento click
enlaces.forEach(function(enlace){
  enlace.addEventListener('click',function(){
    //REMOVER EL ACTIVO
    enlaces.forEach(function(enlace){
      enlace.classList.remove('active')
    });
    //Agregar la clase "active" al enlace actual
    this.classList.add('active')
    //Obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)
    //Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
  });
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace){
  let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : londres
  };
  return contenido[enlace];
}