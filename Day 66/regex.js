
/* Regex - Regular Expressions in JavaScript */

// Regex are a way to match certain parts with your string

// main string...
let myString = "hi i'm ritanjit !";

// regex...
let myRegex = /ritanjit/

// test() method...
let result = myRegex.test(myString);

// regular expressions (regex) doesn't need quotations.

// TIP: this is known as literal matching and any other expressions, even 'Ritanjit' will not match.


-




console.log('\n\nIs ' + myRegex + ' present in the string : \n\n"' + myString + '"\n\nTest Result : ' + result + '\n\n');

