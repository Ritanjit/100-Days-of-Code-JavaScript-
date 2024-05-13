
/* ( a ? b : c ) --> Conditional or Ternary Operator */

// a ? b:c can be used as on line if-else expression, where 'a' is the condition, 'b' is the executable code when condition is true and 'c' is executed when false.

function ternary(a,b){
    return a===b ? 'They are Equal !' : 'They are Not Equal !';
}

let res = ternary(89,67);


console.log('\n\n-- Ternary Operators in JavaScript --\n\n\t' + res + '\n');











