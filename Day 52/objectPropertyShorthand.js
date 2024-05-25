
/* Object Property Shorthand */

// function to create object [ES5]
const createID = (name,branch,rollNo) => ({name,branch,rollNo});

// function to create object using object property shorthand [ES6]...
const metaData = (age,gender,nationality) => ({age,gender,nationality});

// TIP: cover return object with ({object}) to ensure proper output.

// display
console.log('\n\n\t\t--- Student ID ---');
console.log('\n', createID('Ritanjit','CSE',78002024), '\n\n');
console.log('\t\t--- Meta Data ---');
console.log('\n', metaData(21,'male','Indian'), '\n\n');





