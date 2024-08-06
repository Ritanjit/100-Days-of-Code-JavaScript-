
/* spinal-tab-case in JavaScript */

// spinal case --> 'all-lowercase-words-joined-by-dashes'

const spinalCase = str => {

    // separating 'lowerUpper' case to 'lower Upper' case
    let spaced = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // removing blank spaces and underscores
    let dashed = spaced.replace(/\s+|_+/g,'-');

    // return all lower case string
    return dashed.toLowerCase();
}

let a = spinalCase('This Is Spinal Tap');
let b = spinalCase("thisIsSpinalTap");
let c = spinalCase("The_Andy_Griffith_Show");

console.log('\n\n** spinal tap case **');
console.log('\n\n' + a);
console.log('\n\n' + b);
console.log('\n\n' + c + '\n\n');