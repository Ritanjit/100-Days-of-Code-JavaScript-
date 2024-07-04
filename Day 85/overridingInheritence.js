/* overriding inheritance in JavaScript */

// original contructor
function Animal() {}
Animal.prototype.eat = function() {return 'nom nom nom'};

// inherited constructor 
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
// overriding eat()
Bird.prototype.eat = function() {return 'peck peck peck'};

// inherited constructor lvl 2
function Seagall() {}
Seagall.prototype = Object.create(Bird.prototype);
// overridng eat() 
Seagall.prototype.eat = function() {return 'gawk gawk gawk'};
