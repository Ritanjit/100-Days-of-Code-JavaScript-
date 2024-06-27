/* largest number of an array in JavaScript */

function largestOfFour(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
        // don't initialize this as 0 or else it won't work for negative numbers
        let temp = arr[i][0];    
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > temp) {
                temp = arr[i][j];
            }
        }
        largest.push(temp);
    }
    return largest;
}