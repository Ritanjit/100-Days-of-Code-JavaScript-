
/* Recursion has two condition cases: 
1st --> Base Case : Recursive function must have a base case when return without calling the function again otherwise they will never stop executing. Limit condition for the recursive function to stop or else it will never end.
2nd --> Recursive Case : This leads to recursive calls or repeative function calls. The final value to be returned is stored in its return statement */

/* NOTE: Recursion starts work from End of Array */

// RECURSION 

let array = [1,2,3,4,5,6,7,8,9,10];

// [SUM] Recursive Function 
function sum(arr,n){
    // Base Case (bottom limit)
    if(n<=0){
        return 0;
    } 
    // Recursive Case (the value is stored in the return statement)
    else{
        return sum(arr,n-1) + arr[n-1];
    }
}

console.log(sum(array,array.length));

// [MULTIPLY] Recursive Function
function mul(arr,n){
    if(n<=0){
        return 1;
    } else{
        return mul(arr,n-1) * arr[n-1];
    }
}
console.log(mul(array,array.length));