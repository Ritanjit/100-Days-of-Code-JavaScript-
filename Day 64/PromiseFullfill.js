
/* Handling fulfilled promise in JavaScript */

// .then method - schedules a callback function for completion of a promise either resolved (onFulfilled Handler) or rejected (onRejected Handler)

// promise...
const makeServerRequest = new Promise ((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('Data has been received successfully !');
    } else {
        reject('Failure to recieve data from server !');
    }
});

// handiling fulfilled promise...
makeServerRequest.then(result => {
    console.log('\n\n' + result + '\n\n');
})

// TIP: result parameter is what you recieve from a promise - resolved or rejected








