
/* Destructuring Function Arguments */

// object1
const weather = {
    max: 43.4,
    min: 39.8,
    rain: 0,
    AQI: 58
}

// object2
const profile = {
    fname: 'Ritanjit',
    lname: 'Das',
    age: 21,
    height: 6.1,
    weight: 75,
    country: 'India'
}

// destructuring inside function...
const realFeel = () => {
    const {max,min} = weather;
    return ((max+min)/2.00).toFixed(2); 
}

// destructuring in function argument...
const passport = ({fname,lname, country}) => fname + ' ' + lname + ', ' + country;

// TIP: you can use destructuring in function inside it or directly in the argument before entering the function.





// display
console.log('\n\n-- WEATHER FORECAST --');
console.log('\nExpected Temperature : ' + realFeel(weather));
console.log('\n\n\n-- MY PASSPORT --');
console.log('\nIdentity : ' + passport(profile));
console.log('\n\n');


