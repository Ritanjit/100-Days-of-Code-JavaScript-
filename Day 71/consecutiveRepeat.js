/* check if character repeat consecutively or not in JavaScript */

// + is used after the character to check occurence for one or more times.
// it check only for that character and not the entire regex
// /a+/g would find one match in abc and return ["a"]
// find a single match in aabc and return ["aa"].
// checking the string abab, it would find two matches and return ["a", "a"]

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);