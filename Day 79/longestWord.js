/* finding the longest word of a string in JavaScript */

// comparing with an integer...
function findLongestWordLength(str) {
    let arr = str.split(' ');
    console.log(arr);
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// comparing with a string...
function findLongestWordLength(str) {
    let arr = str.split(' ');
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");