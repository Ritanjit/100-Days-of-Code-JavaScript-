/* adding new properties to inherited constructor objects in JavaScript */

// constructor
function Animal() {}
Animal.prototype.eat = function() {
    console.log('nom nom nom');
}

// inherited constructor
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// adding new properties unique to inherited constructor
Dog.prototype.bark = function() {
    console.log('woof!');
}

// instance of inherited constructor
let beagle = new Dog();