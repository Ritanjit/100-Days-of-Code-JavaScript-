/* Local Scope and Fucntions */

// Global variable outside function
const G = 'Hi! I am a Global variable.';

function testLocal(){
  // Local variable inside a function
  const L = 'Hi! I am a Local variable inside a function.';
  //using the variables inside the function
  console.log('\n INSIDE THE FUNCTION...')
  console.log(L);
  console.log(G);
}

testLocal();

// using the variables outside the function
console.log('\n OUTSIDE THE FUNCTION...');
console.log(G);
console.log(L);


/* TIP : Variables declared inside functions have Local scope.
   And variables declared outside functions have Global scope. */