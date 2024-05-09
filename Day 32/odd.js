
// [FOR LOOP] To store odd numbers in Array
const myArray = [];

for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log('\n\n\n[PROGRAM 1]  Odd numbers  -->  ' + myArray + '\n');

// ----------------------------------------------------------------

// [FOR LOOP] To find sum of Array elements
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log('\n[PROGRAM 2]  Sum of all elements  -->  ' + total + '\n');

// ----------------------------------------------------------------

// [FOR LOOP] Matrix calculations in 2D Arrays 
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
console.log('\n[PROGRAM 3]  Determinant of matrix  -->  ' + multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) + '\n\n');

// ----------------------------------------------------------------
// [DO WHILE] vs [FOR] vs [WHILE]
const myArrayy = [];
let i = 10;

// [FOR LOOP]
for(i=0;i<5;i++){
    myArrayy.push(i);
}
console.log('\n[FOR LOOP]         -->    ' + myArrayy);

// [WHILE LOOP]
while (i < 5) {
    myArrayy.push(i);
    i++;
}
console.log('\n[WHILE LOOP]       -->    ' + myArrayy);

// [DO WHILE LOOP]
do {
    myArrayy.push(i);
    i++
} while (i < 5);
console.log('\n[DO WHILE LOOP]    -->    ' + myArrayy);
// -----------------------------------------------------------------




console.log('\n\n');