/* factorial of a number in JavaScript */

// using simple for loop
function factorialize(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

// using recursion
function factorializeR(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorializeR(num - 1);
    }
}


console.log('\n\n\nusing for loop, factorial : ' + factorialize(5));
console.log('\n\nusing recursion, factorial : ' + factorializeR(5) + '\n\n\n');

