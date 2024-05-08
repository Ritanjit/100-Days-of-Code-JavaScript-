// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}
console.log(myArray);

// This loop will not work as the end limit is not specified and will result in infinite loop.
while (i <= 6) {
    myArray.push(i);
    i--;
}
console.log(myArray);