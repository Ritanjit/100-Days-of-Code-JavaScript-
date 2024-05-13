
// Math.floor() and Math.random()

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

function pass(fav){
    let n = (((fav*99)/37)**10)/(10**4);
    return Math.floor(Math.random()*n);
}

console.log(pass(9));