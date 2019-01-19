'use strict';

const contador = {
    max: 8,
    min: 0,
    actualValue: 4,
    inicialValue: 0,
    plus =  () => {
        if (actualValue < max) {
            return actualValue + 1;
        }
    },
    menus  =  () => {
        if (actualValue > min) {
            return actualValue - 1;
        }
    },
    reset =  () => {
        return actualValue = inicialValue;
    }
}
