/* shorthand character class for non-digit matching of regex in JavaScript */

// shorhand '\D' === [^0-9]

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;  
console.log(result);