
/* username validator using regex in JavaScript */

/* 
1. Usernames can only use alphanumeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d{2,}|[a-z]+\d*)$/i;
let userCheck2 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log('\n\nentered username : '  + username + '\n\nusername validation result : ' + result + '\n\n');

// username validator function...
function userValidate(userName) {
    let regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    let result = regex.test(userName);
    if (result) {
        return 'awesome! your username is validated :)'
    } else {
        return 'invalid! try again with a proper username :('
    }
}
let a = userValidate('rahL89');
console.log(a);

// TIP: {2,} is used to check if there are two or more of that part of regex.






-