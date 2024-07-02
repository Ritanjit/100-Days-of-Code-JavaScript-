/* constructor property for objects in JavaScript */

function Dog(name) {
    this.name = name;
}

const pitbull = new Dog('bruno');

function checkContructor(obj) {
    if (obj.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

let a = checkContructor(pitbull); // true
console.log(a);

// problem with constructor property 
Dog.prototype = {
    numLegs: 4,
    sound: function() {
        console.log('bark! bark!');
    }
}

let husky = new Dog('rupert');

// constructor doesn't work after new prototypes are added to new object.
console.log(husky.constructor === Dog); // false 

// solution (1) - use instanceOf property instead...
console.log(husky instanceof Dog);  // true

// solution (2) - define the 'constructor' within the prototype object
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    sound: function() {
        console.log('bark! bark!');
    }
}

let germanShprd = new Dog('dragon');

console.log(germanShprd.constructor === Dog); // true;




