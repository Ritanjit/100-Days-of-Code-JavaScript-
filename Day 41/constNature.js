
/* const objects are mutable */

/* Using const doesn't allow the variables to be reassigned
However, objects (arrays,functions) are still mutable. 
Const only prevents the reassignment of the variable identifier. */

// const array...
const array = [99,88,77];
console.log('\n\nOriginal Array : ', array);

// changing its elements (mutation)...
array[2] = 100;
array[0] = 55;
console.log('\n\nMutated Array : ',array);

// reassigning it to different array...
console.log('\n\n-- REASSIGNING IT WILL GIVE AN ERROR --\n')
array = [1,2,3];

// NOTE: The array elements are mutable but because const is used, the variable identifier,'array' cannot be assigned to a new array like [1,2,3].









