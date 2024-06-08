
/* handling Rejection in Promise */

// catch method is used when a promise has been rejected. It is initiated immediately after reject method of promise is called.

// promise...
const makeServerRequest = new Promise ((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve('Data Recieved Successfully !');
    } else {
        reject('\n\nError !! Your Data was not Recieved. \n\n');
    }
})

// catch method to handle rejection...
makeServerRequest.catch(error => {
    console.log(error);
})

// TIP: 'error' is argument passed to catch method.


