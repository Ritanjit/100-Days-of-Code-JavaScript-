/* optional matching with or in regex in JavaScript */

let myString = "Eleanor Roosevelt";
let myString2 = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor)[a-z]*(.)* Roosevelt/i; // Change this line
let result = myRegex.test(myString);
let result2 = myRegex.test(myString2);
console.log(result);
console.log(result2);