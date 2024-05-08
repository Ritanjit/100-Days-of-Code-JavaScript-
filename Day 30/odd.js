// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 9; i += 2) {
    myArray.push(i);
}
console.log(myArray);


// Array for storing odd numbers
let oddNos = []

// // Function to store odd numbers in array
// function odd(start,end){
//     if(start%2===0){
//         start++;
//         for(start;start<=end;start+=2){
//             oddNos.push(start);
//         }
//     } else if(start%2!==0){
//         for(start;start<=end;start+=2){
//             oddNos.push(start);
//         }
//     }
//     return oddNos.length;
// }

function odd(choice, start, end) {
    switch (choice) {
        case 'even':
            if (start % 2 === 0) {
                for (start; start <= end; start += 2) {
                    oddNos.push(start);
                }
            } else if (start % 2 !== 0) {
                start++;
                for (start; start <= end; start += 2) {
                    oddNos.push(start);
                }
            }
        case 'odd':
            if (start % 2 === 0) {
                start++;
                for (start; start <= end; start += 2) {
                    oddNos.push(start);
                }
            } else if (start % 2 !== 0) {
                for (start; start <= end; start += 2) {
                    oddNos.push(start);
                }
            }
    }
    return oddNos.length;
}

let choice = 'even';
let start = 32;
let end = 40;
console.log(odd(choice,start,end));
console.log(oddNos);