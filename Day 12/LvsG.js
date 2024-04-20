
/* Local vs Global Scope in JavaScript */

// Global variable
const BAND = 'The beatles';

function bestBand(){
  // Local variable
  const BAND = 'Pink Floyd';
  console.log("\n\nThe best band of all time is " + BAND);
  return BAND;
}

bestBand();

// TIP: Local scope variable has precedence over the Global scope variable. The returned value from the function is also the local variable value.
