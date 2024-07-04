/* closure in JavaScript */

// values declared using this.keyword are public properties and can be acessible anywhere within the code
// to prevent this we use closure, wherein we declare a variable to store the value and define a method to return that value, ensuring that the actual value is not accessible outside the object

function Bird() {
    let hatchedEggs = 5;
    this.hatchedEggsCount = function() {return hatchedEggs};
}

let parrot = new Bird();

console.log(parrot.hatchedEggsCount());