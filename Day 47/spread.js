
/* Spread Operator in JavaScript */

// ES5 had apply operator...
let arr = [22,33,99,44,11,66];
const MAX = Math.max.apply(null,arr);

// ES6 uses spread operator...
let arr2 = [45,35,125,65,95,15];
const MAX2 = Math.max(...arr2);

// Spread operator works only with functions and [expressions]...
let temp = [];
temp = [...arr];        // This will work
temp = [...arr];        // This will not work

// TIP: spread operator (...arg) allows you to expand arrays and expressions where multiple arguments or elements are expected.

// Console output
console.log('\n\n-- Array Maximum in JavaScript --');
console.log('\nUsing apply() operator : ' + MAX);
console.log('\nUsing spread operator  : ' + MAX2);
console.log('\n');






