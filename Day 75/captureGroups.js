/* capture groups to check multiple repetitions in regex */

// capture groups ---> (\w+) or (\d+) etc.
// The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // repeated only 3 times.
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);
console.log(result);
console.log(result2);