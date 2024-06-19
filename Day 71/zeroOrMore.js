/* check character occurence for zero or more times for regex in JavaScript */

let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';

let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);
console.log(result);