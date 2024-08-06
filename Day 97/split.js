
/* .split() to separate string in JavaScript */

// .split('delimiter') takes a delimiter argument which decides what should separate the strings
// .split('') --> separates each character
// .split('') --> separates each word

// spliting strings to catch only alphabetical words
const onlyAlphabets = str => str.split(/[^a-zA-Z]/);

console.log(onlyAlphabets("Hello World,I-am code"));