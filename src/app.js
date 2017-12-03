// // import './utils.js';
// import subtract, {square, add } from './utils.js';

// console.log('app.js is running');
// console.log('4 ^ 4 = ', square(4));
// console.log('100 + 23 = ', add(100, 3));
// console.log('100 - 81', subtract(100, 81));

import isSenior, { isAdult, canDrink } from './person.js';

console.log('isAdult(10)', isAdult(10));
console.log('isAdult(30)', isAdult(30));
console.log('canDrink(18)', canDrink(18));
console.log('canDrink(22)', canDrink(22));
console.log('isSenior(10)', isSenior(10));
console.log('isSenior(99)', isSenior(65));