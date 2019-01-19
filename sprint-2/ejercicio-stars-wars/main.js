'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const inputSelected = document.querySelector('#input-selected');



const fetchStarWars = (inputSearch) => {
    const optionSelected = inputSelected.value;
    if (!inputSearch || !optionSelected) return;
    fetch(`https://swapi.co/api/${optionSelected}/?search=${inputSearch}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = data.results;
            const infoEl = document.querySelector('.info-el');

            if (optionSelected === 'people') {

                for (let name of searchResults) {
                    const listInfo = document.createElement('li');
                    const allFilms = name.films;
                    const namesList = document.createTextNode(name.name + '. Su nùmero de films: ' + allFilms.length);
                    listInfo.appendChild(namesList);
                    infoEl.appendChild(listInfo);
                }
            }
            if (optionSelected === 'films') {
                for (let films of searchResults) {
                    console.log(films);
                    const listInfo = document.createElement('li');
                    const allFilms = films.title;
                    console.log(allFilms);
                    const filmsList = document.createTextNode(allFilms);
                    listInfo.appendChild(filmsList);
                    infoEl.appendChild(listInfo);
            }
        }

        }).catch(err => {
            console.log(err);
        })
}

const handlePersonInfo = () => {
    const inputSearch = input.value;
    console.log(inputSearch);

    fetchStarWars(inputSearch);
}

const handleSelected = () => {
   // const optionSelected = inputSelected.value;
  //  console.log(optionSelected);
    const infoEl = document.querySelector('.info-el');
    infoEl.innerHTML = "";
}



btn.addEventListener('click', handlePersonInfo);
inputSelected.addEventListener('change', handleSelected);
