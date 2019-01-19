'use strict';

const setSmile = document.querySelector('.face');

function blink(event){
    console.log(event);
    const blinkEffect = event.currentTarget;
    setSmile.innerHTML = ';)';

}

function sad(event){
    console.log(event);
    const blinkEffect = event.currentTarget;
    setSmile.innerHTML = ':(';
}


setSmile.addEventListener('mouseover', blink);
setSmile.addEventListener('mouseout', sad);

