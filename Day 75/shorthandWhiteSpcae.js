/* shorthand character class for whitespcaes for regex in JavaScript */

// \s === \r\t\f\n\v 

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);