'use strict';

const adalabers = [
  {
    name: 'Maria',
    age: 29,
    job: 'diseñadora'
  },
  {
    name: 'Lucia',
    age: 31,
    job: 'ingeniera quimica'
  },
  {
    name: 'Susana',
    age: 34,
    job: 'Periodista'
  },
  {
    name: 'Rosio',
    age: 25,
    job: 'Actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'Diseñadora'
  },
]

const countAdalabers = () => {
  return adalabers.length;
};

const averageAge = () => {
  let count = 0;

  for (const ada of adalabers) {
      count += ada.age /5;
  }
  return count;
}

const theYoungest = () => {
  Math.min.apply( Math, adalabers);
  let minimum = adalabers.min(adalabers.age);
}

console.log(countAdalabers());
console.log(averageAge());
console.log(theYoungest());