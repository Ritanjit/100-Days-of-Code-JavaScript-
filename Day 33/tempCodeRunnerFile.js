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