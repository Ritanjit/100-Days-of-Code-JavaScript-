/* IIFE modules in JavaScript */

// IIFE is used to group related functions into mixin objects or modules

// mixin functions...
function glideMixin(obj) {
    obj.glide = function () {
        return 'i am glidinnnnn!';
    }
}

function flyMixin(obj) {
    obj.fly = function () {
        return 'i am flyinnnnn';
    }
}

// IIFE module function...
let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () { return 'i am glidinnnnn!'; }
        },
        flyMixin: function (obj) {
            obj.fly = function () { return 'i am flyinnnnn!' }
        }
    }
})();

// adding module to objects...
motionModule.flyMixin(swan);
swan.fly();

motionModule.glideMixin(penguin);
penguin.glide();