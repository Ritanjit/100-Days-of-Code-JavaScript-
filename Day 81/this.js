/* this keyword in JavaScript */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());

// this keyword in objects help ensure that if object name is changed, then its references aren't required to be changed one by one.