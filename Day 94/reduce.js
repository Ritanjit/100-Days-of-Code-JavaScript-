
/* .reduce() in JavaScript */

// .reduce() is most general of all array operations. both .map() and .filter() can be derived from .reduce()
// it takes two parameters --> first is the callback functions. it has four arguments, first is called the accumulator the value that is to be returned, and gets assigned the values of the previous iterations at start of current iteration. second is the current element, third is the index of current element, and fourth is the array being reduced.
// second parameter --> this is the initial value of the accumulator. if it is not passed, then the first iteration is skipped and for second iteration, the first element of the array becomes the initial value.

const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "imdbRating": "7.8",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "imdbRating": "8.6",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "imdbRating": "9.0",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "imdbRating": "7.3",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "imdbRating": "8.7",
    }
];

// .reduce() with .filter() and .map()
const averageRating = function (watchList) {
    let average = watchList.filter(movie => {
        return (movie.Director === 'Christopher Nolan');
    }).map(movie => parseFloat(movie.imdbRating)).reduce((sum, rating) => sum + rating) / watchList.filter(movie => {
        return (movie.Director === 'Christopher Nolan');
    }).length;
    return average;
}

console.log('\n\n\n ---Director Profile---\n Christopher Nolan\n Average Rating: ', averageRating(watchList), '\n\n\n');




