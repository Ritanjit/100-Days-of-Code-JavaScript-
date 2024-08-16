
/* pigLatin in JavaScript */

// pigLatin --> if starting character is vowel then 'way' is added at end. if starting character is consonant then all consonants till vowel is extracted and added to the end along with 'ay' at end.

const pigLatinTranslate = str => {

    let pigLatin = ''

    // vowel regex
    let vowel = /[aeiou]/ig;

    if (str[0].match(vowel)) {      // if first character is vowel
        pigLatin = str + 'way'; 
    } else if (str.match(vowel)===null) {       // only consonant
        pigLatin = str + 'ay';
    } else {        // consonant at starting
        let vowelIndex = str.indexOf(str.match(vowel)[0]);
        pigLatin = str.substr(vowelIndex) + str.substr(0,vowelIndex) + 'ay';
    }

    return pigLatin;
}

console.log(pigLatinTranslate("aeroplane"));
console.log(pigLatinTranslate("consonant"));
console.log(pigLatinTranslate("paragraphs"));
console.log(pigLatinTranslate("glove"));



