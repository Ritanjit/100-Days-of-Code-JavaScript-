
/* alternation for multiple regex in JavaScript */

// main string...
myString = 'i have a pet rabbit. she just eats and sleeps.';

// regex with or operator for alternation...
myRegex = /dog|cat|fish|rabbit/;

// test() method...
result = myRegex.test(myString);

console.log('\n\nIs ' + myRegex + ' present in the string : \n\n"' + myString + '"\n\nTest Result : ' + result + '\n\n');

// TIP: use or operator as many times as you want.








