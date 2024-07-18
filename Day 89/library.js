/* small library using functional programming in JavaScript */

const bookList = ['Alchemist','To kill a Mockingbird','The catcher in the Rye','The courage to be disliked','Numbers','Eleanor & Park'];

function add(bookName) {
    return bookList.concat(bookName);
}

function remove(bookName) {
    let index = bookList.indexOf(bookName);
    if (index>=0) {
        let front = bookList.slice(0,index);
        let back = bookList.slice(index+1);
        return front.concat(back);
    }
}

console.log(add('Bhagawat Gita'));
console.log(remove('Numbers'));