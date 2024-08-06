
/* squared positive integers using .filter() and .map() in JavaScript */

const sqrPosInt = arr => {
    return arr.filter(num => (num>0 && num%parseInt(num)===0)).map(num => Math.pow(num,2));
}

console.log(sqrPosInt([2.33,13,-8.7,17]));