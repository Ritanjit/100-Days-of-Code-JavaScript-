/* check ending of string in JavaScript */

// (str.length-target.length) as starting index
function confirmEnding(str, target) {
    return (str.slice(str.length-target.length)===target);
}

// (-target.length) negative sign will count from backwards
function confirmEnding(str, target) {
    return (str.slice(-target.length)===target);
}

console.log(confirmEnding("Bastian", "n"));

let string = 'Bastian';
let target = 'ian';
console.log(string.slice(string.length-target.length));