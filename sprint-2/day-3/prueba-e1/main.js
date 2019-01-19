'use strict';

let defaulPic = 'url(http://placehold.it/300x300)';
let userPic = 'url(http://www.fillmurray.com/300/300)';
const profilePicDefault = document.querySelector('.img-user');

profilePicDefault.style.backgroundImage = defaulPic;

if (userPic) {
    profilePicDefault.style.backgroundImage = userPic;
}

