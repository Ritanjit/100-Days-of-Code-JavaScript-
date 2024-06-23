/* replace matches in regex in JavaScript */

// .replace(regex,replaceWith)
// use $1,$2,$3... sign within replaceWith string to access particular capture groups.

let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "\n\n$3!\n\n$2!\n\n$1!\n\n"; // Change this line
let result = str.replace(fixRegex,replaceText);
console.log(result);
