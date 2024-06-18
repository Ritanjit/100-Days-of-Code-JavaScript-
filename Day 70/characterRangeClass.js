
/* range in characters class for regex in JavaScript */

let myString = 'The big brown fox jumped over the fench.';
let myString2 = 'Words with at are cat, rat, mat, chat, hat, bat, tat, that, pat, oat, sat, etc.';
let myString3 = '...and Sherlock said, "come to 12A-Baker Street-19204A"'

// regex with character class range to match all letters of the string...
let myRegex = /[a-z]/ig;

let find = myRegex.test(myString);
let extract = myString.match(myRegex);

// regex with '...at' words
let myRegex2 = /[a-z]at/ig;

let find2 = myRegex2.test(myString2);
let extract2 = myString2.match(myRegex2);

// regex with numbers and alphabet ranges
let myRegex3 = /[a-r0-9]/ig;

let find3 = myRegex3.test(myString3);
let extract3 = myString3.match(myRegex3);

// TIP: you can use either the lowecase or uppercase and i flag to match all cases. Don't forget g flag if you want to match all occurences.

// display..
console.log('\n\nRegex : ' + myRegex + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find + '\n\nExtracting...\nMatch Result : ' + extract + '\n\n');
console.log(extract);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

console.log('\n\nRegex : ' + myRegex2 + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find3 + '\n\nExtracting...\nMatch Result : ' + extract3 + '\n\n');
console.log(extract3);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

console.log('\n\nRegex : ' + myRegex2 + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find2 + '\n\nExtracting...\nMatch Result : ' + extract2 + '\n\n');
console.log(extract2);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

