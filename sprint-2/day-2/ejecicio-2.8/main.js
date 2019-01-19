'use strict';

const doglist = document.querySelector('.list');
const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

doglist.innerHTML= `
<li> <img src="${firstDogImage}"> ${firstDogName}</li>
<li>  <img src="${secondDogImage}"> ${secondDogName}</li>
<li>  <img src="${thirdDogImage}"> ${thirdDogName}</li>`;
