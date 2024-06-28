/* slice n splice in JavaScript */

// copy each element of first array into second array at given index without changing the two arrays

// without using splice()
function frankenSplice(arr1, arr2, n) {
    let partA = arr2.slice(0, n);
    let partB = arr2.slice(n, arr2.length);
    for (let i = 0; i < arr1.length; i++) {
        partA.push(arr1[i]);
    }
    for (let i = 0; i < partB.length; i++) {
        partA.push(partB[i]);
    }

    return partA;
}

let a = frankenSplice([1, 2, 3], [4, 5, 6, 8, 9], 2);
console.log('Method 1 : ' + a);

// using splice()
function insertSplice(arr1, arr2, n) {
    let temp = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        temp.splice(n, 0, arr1[i]);
        n++;        // IMPORTANT STEP (index value n must be increment or new value of i will get inserted at same index again)
    }
    return temp;
}

let b = insertSplice([1, 2, 3], [4, 5, 6, 8, 9], 2);
console.log('Method 2 : ' + b);

// using spread syntax
function quickInsert(arr1, arr2, n) {
    let temp = arr2.slice();
    temp.splice(n, 0, ...arr1)       // spread operator diminishes need for loop
    return temp;
}

let c = quickInsert([1, 2, 3], [4, 5, 6, 8, 9], 2);
console.log('Method 3 : ' + c);


// shortest method
function justIn(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, arr2.slice(n, arr2.length)];
}

let d = justIn([1, 2, 3], [4, 5, 6, 8, 9], 2);
console.log('Method 4 : ' + d);    