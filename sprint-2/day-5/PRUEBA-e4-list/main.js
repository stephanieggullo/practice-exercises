'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btnActive = document.querySelector('.btn');
const movies = document.querySelector('.list-movies');

const showMessage = () =>  {
    movies.innerHTML= `
    <li>${theButterFlyEffect}</li>
<li> ${theButterFlyEffect} </li>
<li class="mEternalSunshineOfTheSM moviesT"> ${eternalSunshineOfTheSM} </li>
<li class="mSplit moviesT"> ${split}</li>`;
}

btnActive.addEventListener('click', showMessage);



function handleMovies(event) {
  const myLi = document.querySelector('.mSplit');
  console.log(myLi.innerHTML);
}

movies.addEventListener('click', handleMovies);



