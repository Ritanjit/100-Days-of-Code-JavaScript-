
/* wildcard period for Regex in JavaScript */

let myString = 'how are you Howard ? how are you liking your Hoverboard?';

// wilcard dot or period is used when you don't know the full string...
let myRegex = /ho./ig;
let myRegex2 = /Ho.../ig;

let find = myRegex.test(myString);
let extract = myString.match(myRegex);
let find2 = myRegex2.test(myString);
let extract2 = myString.match(myRegex2);

// TIP: number of dots indicate the number of letter/strings to find.

// display..
console.log('\n\nRegex : ' + myRegex + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find + '\n\nExtracting...\nMatch Result : ' + extract + '\n\n');
console.log(extract);

console.log('\n\nRegex : ' + myRegex2 + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find2 + '\n\nExtracting...\nMatch Result : ' + extract2 + '\n\n');
console.log(extract2);
