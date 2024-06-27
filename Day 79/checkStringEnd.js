/* check ending of string in JavaScript */

function confirmEnding(str, target) {
    let arr = str.split('');
    if (arr[arr.length - 1] === target) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));