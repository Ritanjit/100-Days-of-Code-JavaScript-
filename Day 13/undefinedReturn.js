
/* Functions without return value */

let age = 120;

// function without return statement...
function noReturn(){
  age += 5;             // added 5 to global variable age
}

noReturn();   // called the function

console.log("\n\n Today, I will become " + age + " years old !");

// TIP : the global variable has been changed but the returned value is undefined by default.
