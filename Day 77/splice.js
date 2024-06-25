/* splice() in JavaScript */

// splice() lets delete any particular elements within the array at any index.
// splice() modifies the array and creates new array with the removed elements.
// splice() can have three parameters.
// first argument is the starting index and second is the number of indices to delete

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
console.log('\n\nOriginal Array : ' + arr);

let newArr = arr.splice(1,4);

console.log('\nsplicing...\nModified Array : ' + arr);
console.log('\nNew array : ' + newArr + '\n\n');

// tip: 