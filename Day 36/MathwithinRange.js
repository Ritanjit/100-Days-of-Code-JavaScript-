// This function will give you a random number which is equal to or greater than your minimum value and less than or equal to your maximum value.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(50, 100));