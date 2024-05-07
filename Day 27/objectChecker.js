
/* Property Checker for JavaScript Objects */

// Library of books
const BOOKS = {
    'Paulo Coelho' : 'The Alchemist',
    'Harper Lee' : 'To Kill a Mockingbird',
    'Marcus Aurelius' : ['Meditations','170 CE'],
    'J D Salinger' : 'The Catcher in the Rye',
    'Ichiro Kishimi' : 'The Courage to be Disliked',
    'Rachel Ward' : 'Numbers',
    'Rainbow Rowell' : 'Eleanor & Park'
}

// Function to check property
function checkProp(obj,prop){
    if(obj.hasOwnProperty(prop)){
        return 'Property Found : ' + obj[prop];
    }
    return 'Property Does Not Exist !';
}

// Display
let a = checkProp(BOOKS,'Marcus Aurelius');
console.log('\n\n\t      --JavaScript Property Checker--');
console.log('\n\t\tsearching...');
console.log('\n\t   ' + a + '\n\n');

// TIP: The if statement by default executes the commands inside it if the condition is True. 














