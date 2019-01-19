'use strict';


let Welcome = document.querySelector('.welcome-user');
const nameUser = 'stephanie';
const nameDefault = '';
let nameRegister = '';


if (nameUser === nameRegister) {
    Welcome.innerHTML = (`bienvenida ${nameUser}.`);
} else {
    Welcome.innerHTML = (`Lo siento pero el usuario que has introducido no está registrado.`);
}


