'use strict';

const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const counterEl = document.querySelector('.counter');
let counter = 0;
let temp;

const incrementAndShow = () => {
  counter++;
  counterEl.innerHTML = counter;
}

const handlerStop = (event) => {
  const selectBtn = event.currentTarget;

  if(selectBtn === stopBtn){
    clearInterval(temp);

  } else if(selectBtn === resetBtn){
    counter = 0;
    temp = setInterval(incrementAndShow, 1000);
  }
}



stopBtn.addEventListener('click', handlerStop);
resetBtn.addEventListener('click', handlerStop);


temp = setInterval(incrementAndShow, 1000);

