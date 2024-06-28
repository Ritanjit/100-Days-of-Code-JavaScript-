/* index of given element if array was sorted in JavaScript */

// using loops to sort array...
function getIndexToIns(arr, num) {
    arr.push(num);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr.indexOf(num);
}

let a = getIndexToIns([40, 60], 50);
console.log(a);

// using sort() method...
function getIndex(arr, num) {
    return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}
// here .push() doesn't work as it doesn't allow more methods to associate with it.
// .sort((a,b) => a-b) is used with (a,b) => a-b function as just default .sort() sorts elements converting them to strings.
// in (a,b) => a-b, if a-b is negative then a comes before b and if positive it comes after b. for null or 0 position is not changed.-

let b = getIndex([40, 60], 50);
console.log(b);