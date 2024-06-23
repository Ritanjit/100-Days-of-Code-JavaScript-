/* shorthand character class for non-whitespcaes for regex in JavaScript */

// \S === [^\r\t\f\n\v]

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace).length;   // total no. of characters in string except space
console.log(result);