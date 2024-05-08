// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 9; i += 2) {
    myArray.push(i);
}
console.log(myArray);


// Array for storing odd numbers
let oddNos = []

function odd(choice, start, end) {
    switch (choice) {
        case 'even':
        case 'Even':
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
        case 'Odd':
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

let choice = 'Odd';
let start = 3122;
let end = 7230;
console.log(odd(choice,start,end));
console.log(oddNos);
console.log('\nFOUND YOUR NUMBERS...\n\n' + choice +' numbers from ' + start + ' to ' + end + ':\n| ' + oddNos[0] + ' | ' + oddNos[1] + ' | ...... | ' + oddNos[oddNos.length-2] + ' | ' + oddNos[oddNos.length-1] + ' |' + '\n\nTotal Numbers : ' + oddNos.length);