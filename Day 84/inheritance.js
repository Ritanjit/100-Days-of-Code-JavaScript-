/* inheritence in JavaScript */

// if a function is common for multiple constructor functions, then a common supertype(parent) constructor can help in DRY(don't repeat yourself) code

// constructor 1
function Supraa(hp) {
    this.hp = hp;
}

Supraa.prototype = {
    constructor: Supraa,
    speed: function () {
        console.log('veryyyy fasttttt');
    }
}

// constructor 2
function Trueno(hp) {
    this.hp = hp;
}

Trueno.prototype = {
    constructor: Trueno,
    speed: function () {
        console.log('veryyyy fasttttt');
    }
}

// both constructors are using the same method speed. instead a common supertype (parent) can be used
function Drag() { };

Drag.prototype = {
    constructor: Drag,
    speed: function () {
        console.log('veryyyy fasttttt');
    }
}

// using inheritance for the other constructors
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Object.create(obj.prototype) is used instead of new keyword as it creates new instance and set the obj as prototype of new object.
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); 

// all instances of Dog and Bird (i.e duck & beagle) will also inherit Animal (supertype) constructor property
// to stop this, we need to set supertype of Dog and Bird as them itself.
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


// in simple terms, object can inherit methods of another object by referencing its prototype object
ChildObject.prototype = Object.create(ParentObject.prototype);

// and child object recieved its own methods by chaining them onto its prototype
ChildObject.prototype.methodName = function() {}

// also parent object methods can be overridden in child object simply by adding them to childObject.prototype
ChildObject.prototype.overridenMethod = function() {}
