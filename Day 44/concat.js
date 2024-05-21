
/* arguments using inline functions with arrow syntax */

// for single argument, omit the ()...
const doubler = number => number*2;
// works same as const doubler = (number) => number*2

// for multiple arguments...
const multiplier = (n1, n2) => n1*n2;

// another example...
const ConcatArr = (arr1, arr2) => arr1.concat(arr2);


let a = [1,2];
let b = [3,4];
console.log('\n\nJoining your array....\n\nNew Array : |' + ConcatArr(a,b) + '|');
