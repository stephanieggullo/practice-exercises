'use strict';

const counterEl = document.querySelector('.counter');

let counter = 0;

function incrementAndShowCounter() {
    counter++;
    counterEl.innerHTML = counter;

}

setInterval (incrementAndShowCounter, 2000);



