/* check prototype of object in JavaScript */

// all objects in JS have a prototype(constructor function). 
// since prototype is itself is an object, therefore prototypes can also have their own prototypes.

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// .prototype.isPrototypeOf checks if the object has inherited prototypes from the constructor function
let checkProto = Dog.prototype.isPrototypeOf(beagle);
console.log(checkProto);

// prototypes (constructors) are also objects.
let typePrototype = typeof(Dog.prototype);
console.log(typePrototype);

// object is prototype of Dog, which in turn is a prototype
let objProto = Object.prototype.isPrototypeOf(Dog.prototype); 
console.log(objProto);

// .hasOwnProperty() method is defined in Object.prototype, which is then accessbile to Dog.prototype and then to husky
// this is a prototype chain ---> Object.prototype is the supertype for Dog.prototype and husky, Dog.prototype is subtype for Object.prototype and supertype for husky, and husky is subtype for Object.prototype and Dog.prototype
let husky = new Dog('bruno');
let checkOwnProto = husky.hasOwnProperty("name");
console.log(checkOwnProto);




