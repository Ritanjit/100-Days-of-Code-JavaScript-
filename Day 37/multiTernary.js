
/* if else...if using Ternary Operator in JavaScript */

function check(num){
    return (num===0) ? 'Zero' 
        : (num>0) ? 'Positive'
        : 'Negative';
}

let a = check(0.99);
let b = check(-0.01);
let c = check(0.11*0);

// TIP: always write each condition in ternary operator on different line for best practice

console.log('\n\n-- Ternary Operator in JavaScript --\n\n  0.99           -->  ' + a + '\n\n  -0.01          -->  ' + b + '\n\n  0.11 x 0       -->  ' + c + '\n');
