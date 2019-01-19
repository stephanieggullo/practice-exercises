'use strict';

const books1 = document.querySelector('#input');
const books2 = document.querySelector('#input2');
const btnActive = document.querySelector('.btn');


const showBooks = () => {
  const ValueBooks1 = books1.value;
  const ValueBooks2 = books2.value;
  const allBooks = []; 
  allBooks.push(ValueBooks1);
  allBooks.push(ValueBooks2);
  
  for (const book of allBooks) {
    console.log (`"A mi tambien me gusto mucho ${book}"`);
  }
  
}


btnActive.addEventListener('click', showBooks);