'use strict';

let conteinbox = document.querySelector('.box');
let conteinTitle = document.querySelector('.title');
let conteinText = document.querySelector('.text');

console.log(conteinText);

if (conteinbox.classList.contains('warning')) {
    conteinTitle.innerHTML = 'Aviso';
    conteinText.innerHTML = 'Tenga cuidado'
} else if (box.classList.contains('error')) {
    conteinTitle.innerHTML = 'Error';
    conteinText.innerHTML = 'Ha surgido un error'
} else if (box.classList.contains('success')) {
    conteinTitle.innerHTML = 'correcto';
    conteinText.innerHTML = 'Los datos son correctos'
}