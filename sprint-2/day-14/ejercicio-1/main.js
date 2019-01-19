'use stricts';

const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

  

const [{name: nameOne, time: timeOne},{name: nameTwo, time: timeTwo}, {name: nameThree, time: timeThree}] = users;

console.log(`la medalla de Oro es para ${nameOne} con un tiempo de ${timeOne}. La medalla de Plata es para ${nameTwo} con un tiempo de ${timeTwo}. La medalla de bronce es para ${nameThree} con un tiempo de ${timeThree}.`);

//Ejercicio 3

const newUser = [...users, {name: 'Argus Fitch', time: 78}];

console.log(newUser);

//Ejercicio 4

const [firstUser] = users;

const winner = {... firstUser, win:1};

console.log (winner);

