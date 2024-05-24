
/* Destructuring Arrays */

// Unlike destructuring operator, Spread operator (...arr) cannot be used to access specific values in the array. It unpacks all the elements into a comma separated list.

// array
const ARR = ['apple-pie','biryani','cheese-sticks','dounut','egg-bhujia','french-fries','garlic-bread','hotdog','ice-cream'];

// destructuring array
let [a,b] = ARR;          // First two elements are assigned
let [,,,,,f,,i] = ARR;       // Comma helps access specific index values

// display
console.log('\n\n\t\t-- MENU --\n');
console.log('Before Swapping...\n' + '| ' + a + ' | ' + b + ' | ' + f + ' | ' + i + ' | \n');

// swapping using destructuring
[a,b,,,f,,i] = [f,i,,,a,,b];

// display
console.log('After Swapping...\n' + '| ' + a + ' | ' + b + ' | ' + f + ' | ' + i + ' | \n');

// TIP: Be careful with the commas while acessing the desired element.







