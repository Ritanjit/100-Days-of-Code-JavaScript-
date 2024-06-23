/* quantity specifiers for regex in JavaScript */

// + is used to test for one or more repetitions.
// * is used to test for zero or more repetitions.
// quantity specifier {1,4} is used for specific range of repetitions

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // h repetitions is whithin 3 to 6
let result = ohRegex.test(ohStr);
console.log(result);