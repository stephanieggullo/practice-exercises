'use strict';

function box(isBorderBox, width, padding, border) {
    if(isBorderBox === true) {
        return width - (2*padding) - (2*border);
    } else {
        return  width + (2 * padding) + (2 * border);
    }
}

console.log(box(true, 30, 5, 1));
console.log(box(false, 30, 5, 1));


