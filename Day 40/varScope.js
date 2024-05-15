
/* Scope of 'var' vs 'let' keyword */

// Scope in general - Global
var arr = [];
var i;
for (i=0;i<3;i++) {
    arr.push(i);
}
console.log('\n\nGlobal Scope...')
console.log(arr);
console.log('Value of i : ' + i);

// Scope in block - Global          
var arr2 = [];
for (var i2=0;i2<3;i2++) {
    arr2.push(i2);
}
console.log('\n\nBlock Scope...')
console.log(arr2);
console.log('Value of i : ' + i2);       
// value of i still gets incremented as it has global scope even when declared inside a block.

// Problems with var
var printTwo;
for (var i3=0;i3<3;i3++) {
    if (i3===2) {
        printTwo = function() {
            return i3;
        };
    }
}
console.log('\n\nProblem with var...');
console.log('Value from function : ' + printTwo());    
console.log(i3)     // running this will have no error as i does not have local block scope.     
// value from function is not 2 as it gets updated and the function printTwo() returns the global value of i and the value it had within the if block.

// Problem solved with let 
let printNumTwo;
for (let i4=0;i4<3;i4++) {
    if (i4===2) {
        printNumTwo = function() {
            return i4;
        };
    }
}
console.log('\n\nProblem solved with let...');
console.log('Value from function : ' + printNumTwo());
console.log(i4); // running this line will show error as i has block local scope.
// let keyword solves this problem as it has block scope and the returns the value i had within the block.





console.log('\n\n');