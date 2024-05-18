// NOTE: try..catch is not showing in console and the function is not able to access the object properties for some reason.

/* Preventing Object Mutation in const */

// const object 1
const MATH_RATIO = {
    golden_ratio: 1.618,
    PI: 3.14
};

// const object 2
const WEATHER = {
    temperature: 40.3,
    rain_chance: 0
};

// To freeze object from mutation...
Object.freeze(MATH_RATIO);

try {
    MATH_RATIO.golden_ratio = Math.random();
} catch (error) {
    console.log('\n\nChecking for error....\n');
    console.log('Error found !! \nThe Error : ' + error);
}

try {
    WEATHER.rain_chance = Math.random();
} catch (error) {
    console.log('\n\nChecking for error....\n');
    console.log('Error found !! \nThe Error : ' + error);
}

// function to check if object is mutable...
// function freezeObj(obj,prop) {
//     try {
//         obj[prop] = Math.random();
//     } catch(error) {
//         console.log('\n\nChecking for error....\n');
//         console.log('Error found !! \nThe Error : ' + error);
//     }
// }

// testing if mutable...
// freezeObj(MATH_RATIO, golden_ratio);
// freezeObj(WEATHER, rain_chance);



