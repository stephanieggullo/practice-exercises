'use strict';

const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
let temp;


const showMsg = (userClick) => {

clearTimeout(temp);
  if(!userClick){
    message.innerHTML = 'Te has dormido? :(';
  }
  if(userClick){
    message.innerHTML = ' ';
    temp = setTimeout(showMsg, 3000);
  }
}

const handleMessage = (event) => {
  const clickBtn = event.target;
  console.log(clickBtn);

  showMsg(clickBtn);
}

btn.addEventListener('click', handleMessage);
temp = setTimeout(showMsg, 10000);