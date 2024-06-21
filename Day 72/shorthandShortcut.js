/* shorthand character class \w (shortcut) for regex in JavaScript */

// \w shorthand character class is shortcut for /[A-Za-z0-9_]/ , all alphanumeric characters and also the underscore _

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);