
/* Try..Catch Block */

// function to test error for...
function helloWorld() {
    consolee.log('Hello World');
}

// Try..Catch block to test error...
try {
    helloWorld();
} catch (error) {
    console.log('\n\n\t\t-- Testing for Error --\n');
    console.log('Did you mean console.log() ?\n');
    console.log('The error : ' + error);
}

// TIP: 'try' will look for error in its block & 'catch' will have the action to be perfomed in case error is found by 'try'.













console.log('\n\n');