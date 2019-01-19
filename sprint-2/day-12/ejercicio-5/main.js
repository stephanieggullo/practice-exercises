'use strict';

const message = document.querySelector('.text');
let counter = 0;
let counterMin = 0;
let temp;
let temp2;

const incrementAndShowCounter = () => {
  counter++;
  message.innerHTML = `hace ${counter}seg`;

  if(counter > 5){
    clearInterval(temp);
  counterMin++;
    message.innerHTML = `hace ${counterMin}min`;
  }
}

temp = setInterval(incrementAndShowCounter, 1000);
temp2 = setInterval(incrementAndShowCounter, 59000);


