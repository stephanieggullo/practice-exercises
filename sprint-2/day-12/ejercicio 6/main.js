'use strict';


function showMsg (){
    const mensaje = document.querySelector('.message');
    mensaje.innerHTML = 'Su sesion ha expirado';
}

setTimeout(showMsg, 15000);
