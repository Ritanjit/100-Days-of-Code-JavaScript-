/* optional character class for regex in JavaScript */

let american = "favorite";
let british = "favourite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(american);
let result2 = favRegex.test(british);
console.log(result,result2);