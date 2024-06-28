/* truncate strings in JavaScript */

function truncateString(str, num) {
    if (str.length > num) {
        return (str.slice(0, num) + '...');
    } else {
        return str;
    }
}

let a = truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(a);