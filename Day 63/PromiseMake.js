
/* complete a Promise with Resolve and Reject in JavaScript */

// A promise has 3 states -- Pending, Fullfiled and Rejected

// pending state as no code to complete promise...
const myPromise = new Promise ((resolve, reject) => {
    // no code to resolve or reject
});

// complete promise...
let responseFromServer=1;
const makeServerRequest = new Promise ((resolve, reject) => {
    if (responseFromServer) {
        resolve('We got the data :)');
    } else {
        reject('Data no received :(');
    }
})

// display
console.log('\n\nPromise ?\n\n');
console.log(myPromise);
console.log('\n');
console.log(makeServerRequest);
console.log('\n\n');

// TIP: The variable where promise is stored is not a function. so don't try calling it like a function().









