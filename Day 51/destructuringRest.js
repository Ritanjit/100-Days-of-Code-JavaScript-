
/* Destructuring via Rest elements in JavaScript */

// array
const ARR = ['The Beatles','Queen','Aerosmith','KISS','Oasis','Eagles'];

// destructuring using rest elements...
const [a,b,...arr] = ARR;

// sub-array created...
console.log('\n\nNew Sub-Array created...\nAs array  : ',arr);    // display as array
console.log('As string : ' + arr);                                // display as string

// converting arr to object using Rest syntax...
const {...obj} = ARR;
console.log('\n\nArray to Objcet : ', obj);
// automatically assigns index as properties

// function to make array shorter...
const cutFirstTwo = (list) => {
    let [,,...shorterArr] = list;
    return shorterArr;
}
// TIP: Rest syntac (...arr) work only when used in the end as it includes the last element.



console.log('\nYour Shorter Array : ', cutFirstTwo(ARR));




