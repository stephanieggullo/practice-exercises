'use strict';

const name = document.querySelector('.text');
const btnA = document.querySelector('.btn');


 const showMessage = () => {
     const nameUser = name.value;
     console.log(`Hola ${nameUser}`);
 }

btnA.addEventListener('click', showMessage);

