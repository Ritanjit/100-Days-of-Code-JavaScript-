
/* Inline Functions using Arrow function syntax */

// normal function...
function apple() {
    const colour = 'red';
    return colour;
}

// Inline functions don't need names...
let orange = function() {
    const colour = 'orange';
    return colour;
}

// Arrow function syntax in ES6...
let bananas = () => {
    const colour = 'yellow';
    return colour;
} 

// When there is only return value in function body, you can omit the return syntax...
let grapes = () => 'green';


// When calling these variables with functions, you still need to use the () after them...
console.log('\n\n\t\t  -- FRUIT MARKET --\n');
console.log('\t\t1. Apples are ' + apple());
console.log('\t\t2. Oranges are ' + orange());
console.log('\t\t3. Bananas are ' + bananas());
console.log('\t\t4. Grapes are ' + grapes());








console.log('\n\n');





