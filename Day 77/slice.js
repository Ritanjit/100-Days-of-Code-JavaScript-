/* slice() in JavaScript */

// slice() ---> creates new array with extracted data from an array and leaves the original array untouched.
// 1st parameter === staring index
// 2nd parameter === upto this index but not including this index.

function forecast(arr) {
    let newArr = arr.slice(2, 4);
    return newArr;
}

let arr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
console.log(forecast(arr));

console.log('\n\n\nOriginal Array : \n\n', arr);

let newArr = forecast(arr);
console.log('\n\nslicing...\n\n\nOriginal Array left untouched : \n\n', arr);
console.log('\n\n\nNew array : \n\n', newArr, '\n\n');


// tip: slice() has only two parameters while splice() has three parameters














