
/* .forEach() to duplicate .map() in JavaScript */

Array.prototype.myMap = function (callback) {
    let newArray = [];
    this.forEach((item, index, arr) =>
        newArray.push(callback(item, index, arr))
    );
    return newArray;
}

// test cases
let a = ["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase());
let b = [23, 65, 98, 5, 13].myMap(item => item * 2);

// output
console.log('\n\n\n test case #1\n\n', a, '\n\n\n test case #2\n\n', b, '\n\n\n');






