
/* Destructuring Assignment in JavaScript */

// Object
const USER = {
    fname : 'Ritanjit',
    lname : 'Das',
    rollNo : 4534332,
    course : 'Computer Science',
    country : 'India',
    age : 21,
    sex : 'male',
}

// ES5 syntax...
const fname = USER.fname;
const lname = USER.lname;

// ES6 Destructuring syntax...
const { rollNo, course} = USER;

// Destructuring syntax with user defined variables...
const { country: nationality, age, sex: gender} = USER;

// TIP: Destructuring syntax assings the value of properties of the object to their corresponding variables, or to the variables mentioned separately.

// display
console.log('\n\n\t  -- Student Details --\n');
console.log('\tName    : ' + fname + ' ' + lname);
console.log('\tRoll No : ' + rollNo);
console.log('\tBranch  : ' + course);
console.log('\n\tAge         : ' + age + ' yrs');
console.log('\tGender      : ' + gender);
console.log('\tNationality : ' + nationality);


