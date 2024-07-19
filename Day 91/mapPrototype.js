
/* using for loop to duplicate .map() in JavaScript */

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i], i, this);      // (currentElement, index, originalArray)
    }
    return newArray;
}

// test cases
let a = ["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase());
let b = [23, 65, 98, 5, 13].myMap(item => item * 2);

// output
console.log('\n\n\n test case #1\n\n', a, '\n\n\n test case #2', b, '\n\n\n');



