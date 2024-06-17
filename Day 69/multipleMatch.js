
/* multiple matches for regex in JavaScript */

let myString = 'betty botta bought some Butter but the Butter was bitter so betty botta bought some better butter to make the bitter butter better';

// global flag 'g' is used to find multiple instances of same regex...
let myRegex = /butter/ig

let extract = myString.match(myRegex);

// display...
console.log('\n\nRegex : ' + myRegex + '\n\nString : ' + myString + '\n\nExtracting...\nMatch Result : ' + extract + '\n\n');
console.log(extract);

// TIP: you can use multiple flags in a single regex




