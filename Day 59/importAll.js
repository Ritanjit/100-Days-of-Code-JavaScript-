
/* Importing whole files in JavaScript */

// importing whole file
import * as MyMathModule from './export.js';

// accessing imported files
let sum = MyMathModule.add(99,23);
let difference = MyMathModule.subtract(99,23);
let product = MyMathModule.multiply(99,23);
let quotient = MyMathModule.divide(99,23);

// display 
console.log('\n\n--- Arithmatic Functions ---');
console.log('\nAddition       : 99 + 23 = ' + sum);
console.log('\nSubtraction    : 99 - 23 = ' + difference);
console.log('\nMultiplication : 99 * 23 = ' + product);
console.log('\nDivision       : 99 / 23 = ' + quotient);
console.log('\n');

// TIP: MyMathModule is a user defined object where all the functions from imported file are stored.









