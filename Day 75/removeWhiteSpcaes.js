/* remove whitespaces from strings using regex in JavaScript */

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s+)$/g; // Change this line
let result = hello.replace(wsRegex,''); // Change this line--
console.log(result);
