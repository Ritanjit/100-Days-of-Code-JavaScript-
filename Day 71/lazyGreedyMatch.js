
/* greedy and lazy regex matching in JavaScript */

let mystr = '<h1>Winter is coming</h1>';

// greedy matching - longest possible match in string (default in JS)...
let greedyRegex = /<[a-z0-9]*>/;

// lazy matching - smallest possible match in string...
let lazyRegex = /<[a-z0-9]*?>/;

let greedyM = mystr.match(greedyRegex);
let lazyM = mystr.match(lazyRegex);

// TIP: lazy and greedy match only differ by a '?' after asterisk*(to check zero or more occurence).

// display...
console.log('\n\nString : ' + mystr);
console.log('\n\nRegex : ' + greedyRegex + '\n\nExtracting greedy match...\nMatch Result : ' + greedyM + '\n\n');
console.log(greedyM);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');

console.log('\n\nRegex : ' + lazyRegex + '\n\nExtracting lazy match...\nMatch Result : ' + lazyM + '\n\n');
console.log(lazyM);
console.log('\n- - - - - - - - - - - - - - - - - - - - - - - - - -');






