/* split array into groups of given length in JavaScript */

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let s = 0;
    let e = size;
    for (let i = 0; i < (arr.length / size); i++) {
        temp.push(arr.slice(s, e));
        s += size;
        e += size;
    }
    return temp;
}

let a = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(a); 