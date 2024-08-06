
/* .sort() in JavaScript */

// .sort( conditionalFunctoin() {compare a & b} ) ---> if conditionalFunction() return values less than 0, then a comes before b. if it returns more than 0, then b comes before a. and if it return 0, a & b positions are unchanged.

// sorting array in alphabetical order
const alphabetical = arr => {
    return arr.sort((a,b) => {
        return a===b?0:a<b?-1:1;
    })
}

console.log(alphabetical(['x','g','e','a','b','d','h','i']));

// .sort() mutates the original array.
// to avoid mutating the original array, use concat or slice to create new duplicate array

// non-mutating sorted array
const numberSort = arr => {
    let test = [];
    return test.concat(arr).sort((a,b) => {
        return a===b?0 : a<b?-1 : 1;
    })
}

console.log(numberSort([99,23,1,44,2,83,23]));