
/* using for loop to duplicate .filter() in JavaScript */

Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i=0; i<this.length; i++) {
        if (Boolean(callback(this[i],i,this))) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

// test cases
let a = [23, 65, 98, 5, 13].myFilter(item => item % 2);
let b = ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi");

// output
console.log('\n\n\n test case #1\n\n', a, '\n\n\n test case #2\n\n', b, '\n\n\n');

