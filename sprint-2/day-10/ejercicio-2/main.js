'use strict';

const input = document.querySelector('.field');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

function fetchUser(inputSearch) {
  fetch('https://swapi.co/api/people/?search=' + inputSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let namesPeople = data.results;
      console.log(namesPeople);

      for (const person of namesPeople) {
        list.innerHTML += `<li>Name: ${person.name} Gender: ${person.gender}</li>`;
      }

      localStorage.setItem('infoPeople', JSON.stringify(namesPeople));
    })
}

function getFromStorage(inputSearch) {
  let foundPerson = [];
  const savedNamesPeople = JSON.parse(localStorage.getItem('infoPeople'));
  for (const savedPerson of savedNamesPeople) {
    const lowerName = savedPerson.name.toLowerCase();
    const lowerInput = inputSearch.toLowerCase();
    if (lowerName.includes(lowerInput)) {
      foundPerson.push(savedPerson);
    }
  }
  console.log(foundPerson);
  if (foundPerson.length > 0) {
    for (const person of foundPerson) {
      list.innerHTML += `<li>Name: ${person.name} Gender: ${person.gender}</li>`;
    }
  } else {
    fetchUser(inputSearch);
  }

}

function handlerName() {
  let inputName = input.value;
  getFromStorage(inputName);
  // fetchUser(inputName);
}

btn.addEventListener('click', handlerName);