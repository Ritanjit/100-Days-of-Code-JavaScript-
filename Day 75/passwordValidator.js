/* Lookaheads for regex in JavaScript */

// lookaheads tests for required patterns futher along the string but do not match them.
// positive lookaheads - searches for presence of the pattern.
// negative lookahead - searches for absence of the pattern.

// Rules for the password :
// 1. Password must have 7-13 characters
// 2. Characters can be alphanumeric only.
// 3. There can be only 2 digits.
// 4. There must be no blank space.
// 5. No special characters must be used.

let sampleWord = "Password12";
let sampleWord2 = 'Pssqerlj 12';
let pwRegex = /(?=\w{7,13})(?=\w*\d{2})(?!^\s)/; // Change this line
let result = pwRegex.test(sampleWord);
let result2 = pwRegex.test(sampleWord2);
console.log(result);
console.log(result2);