/* adding prototype properties as objects to constructors in JavaScript */

// add multiple prototype properties by creating prototype object

function Pet(name) {
    this.name = name;
}

// adding single property
Pet.prototype.numLegs = 4;

// adding multiple properties as object
Pet.prototype = {
    type: 'mamnmals',
    sound: function() {
        console.log('moshi moshi dare deska?');
    },
    greet: function() {
        console.log('Hello my name is ' + this.name);
    }
}

let bird = new Pet('joey');

console.log(bird.type);