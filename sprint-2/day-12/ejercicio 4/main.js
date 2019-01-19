'use strict';

const counterEl = document.querySelector('.counter');
const text = document.querySelector('.uva');

let counter = 0;
let temp;
let uva = '';

function incrementAndShowCounter() {
    counter++;
    uva+= 'uva ';
    counterEl.innerHTML = counter;
    text.innerHTML = uva;

    if (counter===12){
    clearInterval(temp);
    }
}

temp = setInterval (incrementAndShowCounter, 1000);