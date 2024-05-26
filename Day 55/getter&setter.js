
/* Getters and Setters in JavaScript Objects */

// Getter and Setter functions allows creation of an API that lets user to get results regardless of your algorithm. It hides the implementation details from the user.

// Getter function returns (gets) the value of the private variable to the user without the user actually accessing the private variable.

// Setter function modifies (sets) the private variable value of the object with the value passed to it as argument.

// Example 1
class Book {
    constructor(author) {
        this._author = author;
    }

    //getter function
    get writer() {
        return this._author;
    }

    //setter function
    set writer(update) {
        this._author = update;
    } 
}

const novel =  new Book('Anonymous');
console.log('\n\n*** NOVEL DETAILS ***');
console.log('Original Author : ' + novel.writer);  // getter function call
novel.writer = 'Paulo Coelho';   // setter invoke
console.log('Updated Author  : ' + novel.writer);  // getter function call

// Example 2
class TemperatureToday {
    constructor(fahrenheit) {
        this._fah = fahrenheit;
    }

    // getter function to convert fahreneheit to celsius
    get tempConvert() {
        return (5/9 * (this._fah - 32)).toFixed(2);
    }

    // setter function to convert celsius to fahrenheit
    set tempConvert(celsius) {
        return this._fah = ((celsius * 9.0)/5 + 32).toFixed(2);
    }
}

const weather = new TemperatureToday(78.33);
console.log('\n\n*** WEATHER CONVERTER ***');
console.log(`${weather._fah} Fahrenheit = ${weather.tempConvert} Celsius`);     // getter invoked
weather.tempConvert = 26.78    // setter invoked
console.log(`${weather._fah} Fahrenheit = 26.78 Celsius`);
console.log('\n\n');

// TIP 1: getter and setter function calls dont actually look like function calls. They are important functions because they hide the implementation details from the user.

// TIP 2: always the preced the name of the private variable with "_variableName" (underscore).



















