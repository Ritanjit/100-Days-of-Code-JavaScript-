
/* .every() and .some() in JavaScript */

// .every() method checks if every element of the array passes the test, then it return true otherwise it return false.

// to check if every element of array is even
const checkEven = arr => {
    return arr.every(n => n%2===0);
}

console.log(checkEven([12, 56, 8, 0, 10, 114]));

// .some() method check if 'any' element passes the test, then it returns true otherwise it returns false.

// to if any element if odd 
const checkOdd = arr => {
    return arr.some(n => n%2!==0);
}

console.log(checkOdd([12, 56, 8, 13, 10, 114]));
