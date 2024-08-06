
/* currying and partial functions in JavaScript */

// arity --> no. of arguments the fuctions requres
// currying --> converting an 'n' argument functions into 'n' functions of 1 argument
// (N arity functions to 1 arity N functions)

// uncurried function
function uncurried(x,y) {
    return x+y;
}

// curried function
function curried(x) {
    return function(y) {
        return x+y;
    }
}

// curried function
const curried = x => y => x+y;

// currying is usefull when you cant supply all the arguments of the function at the same time

