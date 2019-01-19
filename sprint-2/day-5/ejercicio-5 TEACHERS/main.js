'use strict';

const israElm = document.querySelector(".teacher--isra");
const carlosElm = document.querySelector(".teacher--tuerto");
const nasiElm = document.querySelector(".teacher--nasi");

const toggleClass = (event) => {
  const selected = event.currentTarget;
// israElm.classList.remove("teacher--selected");
// carlosElm.classList.remove("teacher--selected");
// nasiElm.classList.remove("teacher--selected");
  if (selected.classList.contains('teacher--selected')){
    selected.classList.remove("teacher--selected");
  } else {
     selected.classList.add("teacher--selected");
  }
  
  if (selected !== israElm) {
    israElm.classList.remove("teacher--selected");
  }
  if (selected !== carlosElm) {
    carlosElm.classList.remove("teacher--selected");
  }
  if (selected !== nasiElm) {
    nasiElm.classList.remove("teacher--selected");
  }
}

israElm.addEventListener('click', toggleClass);
carlosElm.addEventListener('click', toggleClass);
nasiElm.addEventListener('click', toggleClass);