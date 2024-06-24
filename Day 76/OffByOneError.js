/* OBOE (Off By One Error) in JavaScript */

// OBOE --> erros while intializing loop variables.

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();