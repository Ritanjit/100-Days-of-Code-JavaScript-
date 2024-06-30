/* checking for one string in another string using arrays in JavaScript */

// check presence of second array element in first array element (both are strings)
function mutation(arr) {
    let a = arr[0].toLowerCase().split('');
    let b = arr[1].toLowerCase().split('');
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) < 0) {
            return false;
        }
    }
    return true;
}

// without the slice() method, for loop will not need the array[i] element iteration
function mutation(arr) {
    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b) < 0) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));