
/* parseInt() converts string value to integer */

function strToInt(str){
    return parseInt(str);
}

let num = strToInt('01. Ritanjit 09');

// NOTE: It will only return the non-zero integer value before the first instance non numerical value

console.log('\n\n-- String to Integer --\n\n  Your Integer : ' + num + '\n\n');

