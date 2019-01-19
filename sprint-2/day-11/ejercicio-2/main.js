'use strict';

const inputSelect = document.querySelector('#city');
const contentImg = document.querySelector('.img-content');

const cityMadrid = ['https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/Madrid_undia_1397223554.735.jpg?itok=4ziKw0gD', 'https://static.vueling.com/cms/media/47378/madrid_thumb_408.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg'];

const handlerCity = (event) => {
    const citySelected = event.target.value;
    console.log(citySelected);

  if(citySelected === 'Madrid') {
    //  let listImagMadrid = '';
      for(const imgMadrid of cityMadrid) {
        let imageBox = document.createElement('img');
        imageBox.setAttribute('src', imgMadrid);
       // imageBox.setAttribute('width', "300");
        contentImg.appendChild(imageBox);
      }
  }

// console.log(citySelected.src);
}
inputSelect.addEventListener('change', handlerCity);