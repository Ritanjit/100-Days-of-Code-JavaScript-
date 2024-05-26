
/* Class in JavaScript ES6 */

// ES5 uses constructor functions to create objects...
function myNewLaptop(ram,gpu,cpu) {
    this.ram = ram;
    this.gpu = gpu;
    this.cpu = cpu;
    this.print = function() {
        console.log(`\n\n\t\t--- Laptop Specifications ---
        \t    Model : TUF A15
        \t    Ram   : ${this.ram}
        \t    GPU   : ${this.gpu}
        \t    CPU   : ${this.cpu}`);
    };
}
// ES5 uses new keyword to instantiate the object created by constructor....
const TUF = new myNewLaptop(16,'RTX 3060','Ryzen 9 5000');
TUF.print();

// ES6 uses class with implicit or explicit constructors to create objects...
class MyNewLaptop {
    // explicit constructor...
    constructor(ram,gpu,cpu) {
        this.ram = ram;
        this.gpu = gpu;
        this.cpu = cpu;
    }
    // class method...
    print() {
        console.log(`\n\n\t\t--- Laptop Specifications ---
        \t    Model : ROG Zephyrus
        \t    Ram   : ${this.ram}
        \t    GPU   : ${this.gpu}
        \t    CPU   : ${this.cpu}\n`);
    }
}
// ES6 also uses new keyword to instantiate objects in class
const ROG = new MyNewLaptop(32,'RTX 4090','i9 15900H');
ROG.print();

// TIP: ES6 class names use UpperCamelCase by convention. 













