/* negated character set for regex in JavaScript */

// '^' caret character is used to negate characters

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);