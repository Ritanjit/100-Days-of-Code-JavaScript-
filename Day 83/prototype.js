/* prototype for constructors in JavaScript */

// constant properties that do not change with each contructor instance lead to creation of duplicate values each time a new instance is created.

// prototype lets add new property to constructor object without creating duplicate values as it is shared among all instances.

function F1(team) {
    this.team = team;
    this.driver = driver;
    this.fuel = petrol;
}
// here, petrol is constant property and each time a new instance is created, a duplicate value gets created for it.

function cars(model) {
    this.model = model;
}

let toyota = new cars('truenoAE86');

cars.prototype.type = 'drag';  // new property created to be shared with all instances of the constructor

console.log(toyota.type);

