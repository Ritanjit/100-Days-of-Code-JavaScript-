
/* search and replace in JavaScript */

const myReplace = (str,before,after) => {
    let s = str.split(' ');
    let a = s.indexOf(before);
    if (before[0] === before[0].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.toLowerCase();
    }
    s.splice(a,1,after);
    return s.join(' ');
}

let a = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(a);
let b = myReplace("Let us go to the store", "store", "mall");
console.log(b);
let c = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(c);
let d = myReplace("I think we should look up there", "up", "Down");
console.log(d);