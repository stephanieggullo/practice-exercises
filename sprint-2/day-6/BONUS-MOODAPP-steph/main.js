'use strict';

const moodText = document.querySelector('.mood');
const moodSelect = document.querySelector('.moodSelect');
const updateBtn = document.querySelector('.btn');
const container = document.querySelector('.container');


const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


const showMood = () => {
   const selectedFace = moodSelect.value;
   moodText.innerHTML = selectedFace;
   
   const randomNumber = getRandomIntInclusive(0, 100);
   container.classList.remove('even', 'odd');
   if(randomNumber%2 === 0) {
        container.classList.add('even');
   } else {
    container.classList.add('odd');
   }

}

updateBtn.addEventListener('click', showMood);