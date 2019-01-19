'use strict';
const texto = document.querySelector('.title');
const img = document.querySelector('.imagen');

fetch('https://dog.ceo/api/breeds/list/all')
  .then(breedsResponse => breedsResponse.json())
  .then( data => {
    const breeds = data.message;
    const list = Object.keys(breeds);
    console.log(list);

    fetch('https://api.rand.fun/number/integer?min=1&max=50')
        .then(numberResponse => numberResponse.json())
        .then (dataNumber => {
            const randomNumber = dataNumber.result;
          //  console.log(randomNumber);
            var myDog = list[randomNumber];
          //  console.log(myDog);
            texto.innerHTML = myDog;

             fetch('https://dog.ceo/api/breed/'+ myDog + '/images')
                  .then(imgResponse => imgResponse.json())
                  .then( imgData => {
                     console.log(imgData);
                     const image = imgData.message[0];
                     img.src = image;
                  })
         })


  })
