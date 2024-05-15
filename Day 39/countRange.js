
/* Counting between a range in JavaScript */

function countRange(start,end){
    if (end<start) {
        return [];
    } else if (end===start) {
        return [end];
    } else {
        const ARR = countRange(start,end-1);
        ARR.push(end);
        return ARR;
    }
}

let s = 220310007020;
let e = 220310007092;
let a = countRange(s,e);

for(let i=0;i<(e-s);i++){
    console.log(a[i]);
}