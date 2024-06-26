/* splice() in JavaScript */

// splice() ---> delete, retrieve and add element anywhere in the array. also create new array with retrieved elements.
// 1st parameter === starting index
// 2nd parameter === no. of indices to delete
// 3rd parameter === quickly add any no. of elements to that starting index (separated by commas)

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}

let arr = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'];
console.log('\n\n\nOriginal Array : \n\n', arr);

let newArr = htmlColorNames(arr);
console.log('\n\nsplicing...\n\n\nModified Array : \n\n', arr);
console.log('\n\n\nNew array : \n\n', newArr, '\n\n');

// tip: add any number of elements through splice(), just remember to separate them using commas ','





