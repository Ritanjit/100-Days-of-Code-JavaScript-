/* object properties for constructors in JavaScript */

// constructor...
function cars(company,hp) {
    this.company = company;
    this.hp = hp;
    this.type = 'sedans';
}

// object instance...
let truenoAE86 = new cars('toyota',320);

// getting all the 'own properties' of the instance...
let ownProp = [];
let values = [];
for (let properties in truenoAE86) {
    if (truenoAE86.hasOwnProperty(properties)) {
        ownProp.push(properties);
    }
}

console.log(ownProp);