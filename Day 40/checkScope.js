
/* Checking Scope of var and let keywords */

// Scope of var...
function checkScopeVar() {
    var i = 'function scope';
    if (true) {
        var i = 'block scope';
        console.log('Block Scope of i is : ', i);
    };
    console.log('Function Scope of i is : ', i);
}

// Scope of let...
function checkScopeLet() {
    let j = 'function scope';
    if (true) {
        let j = 'block scope';
        console.log('Block scope of j is : ', j);
    }
    console.log('Function Scope of j is : ', j);
}

// Display
console.log('\n\n-- var keyword --');
checkScopeVar();
// var keyword has no local scope in blocks and statements.
console.log('\n-- let keyword --');
checkScopeLet();
// let keyword has local scope in blocks and statements.



console.log('\n\n');

