
/* Converting strings to integers from different number systems */

// parseInt(string, radix) : radix specifies the base of the number in string

function binaryToInt(str){
    return parseInt(str,2);         // binary has base 2
}

function convertStr(str,base){
    return parseInt(str,base);
}

let binary = binaryToInt('11111010011');        // binary

let str = convertStr('7E8',16);                 // hexadecimal

// TIP: binary base = 2, hexadecimal base = 16



console.log('\n\n-- JavaScript Number Converter --\n\n  From Binary      : ' + binary + '\n\n  From Hexadecimal : ' + str + '\n\n');