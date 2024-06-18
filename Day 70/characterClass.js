
/* Character class of Regex in JavaScript */

let myString = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

// regex with [character_class]
let myRegex = /b[eou]/ig;
let myRegex2 = /[aeiou]/ig;
let myRegex3 = /[bh][oea]/ig;

let bWordFind = myRegex.test(myString);
let bWordExtract = myString.match(myRegex);

let vowelTest = myRegex2.test(myString);
let vowelExtract = myString.match(myRegex2);

let doubleClassFind = myRegex3.test(myString);
let doubleClassExtract = myString.match(myRegex3);

// display..
console.log('\n\nRegex : ' + myRegex + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + bWordFind + '\n\nExtracting...\nMatch Result : ' + bWordExtract + '\n\n');
console.log(bWordExtract);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

console.log('\n\nRegex : ' + myRegex2 + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + vowelTest + '\n\nExtracting...\nMatch Result : ' + vowelExtract + '\n\n');
console.log(vowelExtract);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

console.log('\n\nRegex : ' + myRegex2 + '\n\nString : ' + myString + '\n\nChecking...\nTest Result : ' + doubleClassFind + '\n\nExtracting...\nMatch Result : ' + doubleClassExtract + '\n\n');
console.log(doubleClassExtract);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

// TIP: you can use multiple wilcard periods, character classes all together with multiple flags.