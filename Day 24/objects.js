
/* JavaScript Objects */

// In JavaScript, objects are similar to arrays, except that data in arrays can be accessed and modified using indexes but for objects, we access their data using what is called Properties.

// Objects are useful for storing data in a structured way. We can store real life data like cats, dogs, spoons in objects.

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

// In this example, the properties are stored as strings name, legs, tails and enemies. 

let myDog = {
    name: 'Bruno',
    'legs': 4,
    'tails': 1,
    'friends': ['Human', 'balls']
};

// You can even have numbers as properties, and even omit the quotes for single-word strings because JavaScript will automatically typecast non-string properties as strings. 


console.log("\n\nHi! I'm " + myDog.name + "\nI have " + myDog.legs + ' legs.\nAnd my best friend is ' + myDog.friends[0] + '!');

// TIP: JavaScript automatically typecasts non-string properties as strings.


