
/* functions inside objects */

// ES5 syntax
const person = {
    name: 'Ritanjit',
    about: 'a dev obsessed with design.',
    introduction: function() {
        return ("\nHey there! I'm " + this.name + ', ' + this.about);
    }
}

// ES6 syntax
const favs = {
    sport: 'football',
    book: 'The Alchemist',
    hobbies() {
        return ('\nMy fav sport is ' + this.sport + ' and book is ' + this.book + '.\n\n')
    }
}

// TIP: with ES6, your object property can be your function name directly. 

// display
console.log('\n\n\t\t--- ABOUT ME ---');
console.log(person.introduction());
console.log(favs.hobbies());
