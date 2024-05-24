
/* Destructuring Nested Objects */

// Object
const FORECAST = {
    yesterday: {low: 34, high: 44},
    today: {low: 38, high: 45},
    tomorrow: {low: 36, high: 47},
}

// ES5 syntax...
const minY = FORECAST.yesterday.low;        
const maxY = FORECAST.yesterday.high;

// ES6 syntax...
const {today: {low: minT, high: maxT}} = FORECAST;         // Today temp

const {tomorrow: {low: minTom, high: maxTom}} = FORECAST;      // Tomorrow temp

// TIP: Destructuring syntax lets you accesss nested objects with just a single line of code



// display
console.log('\n\n\t\t-- WEATHER FORECAST --\n');
console.log('\n\tYESTERDAY -->   Max: ' + maxY + '°c  | Min: ' + minY + '°c');
console.log('\n\tTODAY     -->   Max: ' + maxT + '°c  | Min: ' + minT + '°c');
console.log('\n\tTOMORROW  -->   Max: ' + maxTom + '°c  | Min: ' + minTom + '°c');
console.log('\n');
