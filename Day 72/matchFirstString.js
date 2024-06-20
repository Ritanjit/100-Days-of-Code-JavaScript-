/* match regex only if at staring of string in JavaScript */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let rickyRegex = /^ricky/ig;
let result = calRegex.test(rickyAndCal);
let result1 = rickyRegex.test(rickyAndCal);
let extract = rickyAndCal.match(calRegex);
let extract1 = rickyAndCal.match(rickyRegex);
console.log(result);
console.log(extract);
console.log(result1);
console.log(extract1);