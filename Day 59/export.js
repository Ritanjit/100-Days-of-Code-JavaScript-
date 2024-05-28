
/* Exporting in JavaScript Files */

// Method 1
export const add = (a,b) => (a+b);

// Method 2
const subtract = (a,b) => (a-b);
export {subtract};

// To export multiple...
const multiply = (a,b) => (a*b);
const divide = (a,b) => (a/b);

export {multiply, divide};

// TIP: with export, you can share your functions and code to use in other JavaScript files.
