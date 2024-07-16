/* principles of functional programming in JavaScript */

// #1 const newArr = arrVar creates a reference to array, arrVar and not a copy. changing newArr will affect arrVar.
let arrVar = ['one','two','three','four'];
const newArr = arrVar;
newArr.push('five');
console.log('\n\n\n # principle 1\n\n Orginal Array...\n\n',arrVar);

// #2 computations done withing a function does not affect the global variable
const arr = ['hi','hello','hey','sup','heyaa'];
let change = function(array) {
    return array.concat(['....','bye','see ya','so long','adieu','goodbye','sayonara']);
}
console.log('\n\n # principle 2\n\n array from function...\n\n',change(arr));
console.log('\n\n *original array...\n\n',arr,'\n\n');

// TIP: functional programming helps with editing code without worrying about changing all instances of the code.





