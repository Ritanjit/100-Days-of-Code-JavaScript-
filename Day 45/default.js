
/* Default values in JavaScript functions */

/* parameters can have default values which are used when function call doesn't provide arguments */

// Inline Function with default value (1)
const greet = (name = 'Anonymous') => 'Hello ' + name + ' !';

// Inline Function with default value (2)
const increment = (number, value = 1) => number + value;


console.log('\n\nWithout Argument : ' + greet());
console.log('\nWith Arguments   : ' + greet('Ritanjit'));
console.log('\n\nWithout Argument : ' + increment(77));
console.log('\nWith Arguments   : ' + increment(77,10) + '\n\n');

// TIP: default value kicks in when the argument is not specified, i.e, it is undefined.


