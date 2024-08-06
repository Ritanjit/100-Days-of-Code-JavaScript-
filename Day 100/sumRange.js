
/* sum of numbers in a range in JavaScript */

function sumAll(arr) {
    let sum = 0;
    let low = arr[0];
    let high = arr[1]
    if (arr[0] > arr[1]) {
        low = arr[1];
        high = arr[0];
    }
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
}

let a = sumAll([1, 4]);
console.log(a);