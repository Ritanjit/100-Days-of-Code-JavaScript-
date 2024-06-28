/* remove falsy values from an array in JavaScript */

function bouncer(arr) {
    let temp = arr.slice();
    let res = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i]) {
            res.splice(i, 0, temp[i]);
        }
    }
    return res;
}

let a = bouncer([7, "ate", "", false, 9]);

console.log(a);
