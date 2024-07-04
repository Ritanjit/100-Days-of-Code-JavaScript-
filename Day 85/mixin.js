/* mixin in JavaScript */

// mixin functions are used when inheitance is not appropriate for ***unrelated objects*** like fly function for both bird and aeroplan. they're not same and cannot have a common supertype parent constructor

let bird = {
    name: 'chuchi',
    numLegs: 2
}

let aeroplane = {
    name: 'boeing 719',
    tyres: 16
}

// mixin function 
let flyMixin = function (obj) {
    obj.fly = function () { return 'i am flying....' };
}

// giving mixin to unrelated objects 
flyMixin(bird);
flyMixin(aeroplane);

console.log('\n\nbird ..... ' + bird.fly());
console.log('\naeroplane ..... ' + aeroplane.fly());
console.log('\n\n');
