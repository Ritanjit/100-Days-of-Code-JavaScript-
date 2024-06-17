
/* .match() method to extract Regex in JavaScript */

// string...
let myString = 'Arjuna asked,"How can there be merit in killing my own kith and kin? O\' Krishna, I have neither a desire for winning this battle nor a desire for kingdom, nor for happiness."';

// regex...
let myRegex = /krishna/i;

// testing for regext...
let find = myRegex.test(myString);

// extracting regex with .match() method...
let extract = myString.match(myRegex);

// TIP: .test() has opposite syntax than .match()

// display
console.log('\n\nRegex : ' + myRegex + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + find + '\n\nExtracting...\nMatch Result : ' + extract + '\n\n');

console.log(extract);











