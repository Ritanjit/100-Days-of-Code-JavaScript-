
/* Recursion to Count Down in JavaScript */

function countDown(n){
    if (n<1) {
        return [];
    } else {
        const ARR = countDown(n-1);
        ARR.unshift(n);
        return ARR;
    }
}

let a = 10;
let b = countDown(a);

console.log('\n\n\t-- Falcon Heavy Launch in JavaScript --\n\n\t      Starting Count Down from...\n');
for(let i=0;i<a;i++){
    console.log('\t\t\tT - ' + b[i]);
}
console.log('\n\t    FALCON HEAVY IS NOW AIRBOUND !!\n\n');