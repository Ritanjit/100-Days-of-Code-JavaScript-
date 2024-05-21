
/* Rest Parameters in Funtions */

// function without rest parameter...
const add = (a,b,c) => {
    const arr = [a,b,c];
    let sum = 0;
    for (let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}
// function with rest parameter...
const mul = (...args) => {
    let prod = 1;
    for (let i=0;i<args.length;i++) {
        prod *= args[i];
    }
    return prod;
}
// TIP: with rest parameters you can pass any number or type of arguments without needing to specify it beforehand.








//display
console.log('\n\n-- REST PARAMETERS --');
console.log('\nWithout Rest Parameters : ' + add(1,2,3));
console.log('\nWith Rest Parameters    : ' + mul(1,3,8,4));
