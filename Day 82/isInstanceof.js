/* checking if object is instance of constructor in JavaScript */

// any new object created from a constructor is said to be its instance

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(10);
console.log(myHouse instanceof House);