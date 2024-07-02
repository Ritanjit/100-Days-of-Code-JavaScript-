/* inheritence in JavaScript */

// if a function is common for multiple constructor functions, then a common supertype(parent) constructor can help in DRY(don't repeat yourself) code

// constructor 1
function Supraa(hp) {
    this.hp = hp;
}

Supraa.prototype = {
    constructor: Supraa,
    speed: function() {
        console.log('veryyyy fasttttt');
    }
}

// constructor 2
function Trueno(hp) {
    this.hp = hp;
}

Trueno.prototype = {
    constructor: Trueno,
    speed: function() {
        console.log('veryyyy fasttttt');
    }
}

// both constructors are using the same method speed. instead a common supertype (parent) can be used

function Drag() {};

Drag.prototype = {
    constructor: Drag,
    speed: function() {
        console.log('veryyyy fasttttt');
    }
}

