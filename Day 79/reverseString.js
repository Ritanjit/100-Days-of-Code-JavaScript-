/* reverse a string in JavaScript */

function reverseString(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

console.log(reverseString("hello how are you ?"));

function reverseStr (str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr('hello'));

// .split('') separates each letter as individual array element
// .reverse() reverse the array
// .join('') joins array elements into a string