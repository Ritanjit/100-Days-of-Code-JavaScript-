/* title case a string sentence in JavaScript */

function titleCase (str) {
    let arr = str.split(' ');
    let sentence = [];
    for (let i in arr) {
        // sentence[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        sentence.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return sentence.join(' ');
}

let a = titleCase("I'm a little tea pot");
console.log(a);