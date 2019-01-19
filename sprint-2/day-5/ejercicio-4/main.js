'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btnA = document.querySelector('.btn');
const movieList = document.querySelector('.listado');


const showList = () => {
    const li1= `<li class="s5"> ${inception} </li>`;
    const li2= `<li class="s4">  ${theButterFlyEffect} </li>`;
    const li3= `<li class="s3">  ${eternalSunshineOfTheSM} </li>`;
    const li4= `<li class="s2">  ${blueVelvet} </li>`;
    const li5= `<li class="s1">  ${split} </li>`;
    movieList.innerHTML = li1 + li2 + li3 + li4 + li5;
}


btnA.addEventListener('click', showList);

const handleaddMovieText = (event) => {
    const myLi1 = document.querySelector('.s1');
    console.log(myLi.innerHTML);
}


movieList.addEventListener('click', handleaddMovieText);
