
/* Recursion to count up to a number */

function countUp(n){
    if (n<1) {
        return [];
    } else {
        const ARR = countUp(n-1);
        ARR.push(n);
        return ARR;
    }
}

let a = 10;
let b = countUp(a);

console.log('\n\n-- JavaScript Hide&Seek Counter --\n');

for(let i=0; i<a; i++){
    let x = b[i];
    console.log('\t counting...  ' + x);
}

console.log('\n   READY OR NOT, HERE I COME !! \n')