
/* i flag in Regex */

// the flag i makes the .test() method ignore cases and literal strings

// main string...
let myString = 'RegexInJavaScript';

// regex...
let myRegex = /regeXinjavasCripT/i;

// .test() method...
let result = myRegex.test(myString);

// TIP: any case related differences don't affect the .test() method

// display...
console.log('\n\nRegex : ' + myRegex + '\n\nString : "' + myString + '"\n\nSearching...\n\nTest Result : ' + result + '\n\n');


