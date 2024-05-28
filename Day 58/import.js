
/* Importing in JavaScript files */

// importing functions from another file
import { add, subtract, multiply, divide} from './export.js';

// using imported functions in current file
let sum = add(99,23);
let difference = subtract(99,23);
let product = multiply(99,23);
let quotient = divide(99,23);

// display 
console.log('\n\n--- Arithmatic Functions ---');
console.log('\nAddition       : 99 + 23 = ' + sum);
console.log('\nSubtraction    : 99 - 23 = ' + difference);
console.log('\nMultiplication : 99 * 23 = ' + product);
console.log('\nDivision       : 99 / 23 = ' + quotient);
console.log('\n');

// TIP: import keyword find the mentioned functions the given file location. The relative file path (./) tells the import to search the file in the same folder.







