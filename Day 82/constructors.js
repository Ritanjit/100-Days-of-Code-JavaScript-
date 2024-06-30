/* constructor functions in JavaScript */

// constructors are functions in JavaScript that create new objects
// constructors have their name capitalized (first letter)
// constructors use this keyword to assign propeties (key) and values 

function User1023() {
    this.username = 'rtnjt';
    this.email = 'rntjt@gmail.com';
    this.password = 123253;
}

// new keyword is used to create a instance of the constructor
// without the new operator, this keyword will not point to any object and would result in unexpected outputs.
let admin = new User1023();
console.log(admin.username);

// passing parameters to constructors to use them as blueprint for multiple datas
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog('bruno', 'black');
console.log(terrier);

