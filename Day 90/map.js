
/* map method in JavaScript */

// array.prototype.map() or map() method iterates over each item of an array and return the result of calling a callback function on each element.

// it does not mutate the original array.

// callback function has 3 argumments --> (1.current array element) (2.index of that element) (3.array map is used on)

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
        "imdbRating": "8.8",
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
        "imdbRating": "8.3",
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
        "imdbRating": "7.9",
    }
];

// map() method to find to get only ratings and title
const topFiveMovies = watchList.map((movie) => ({
    title: movie['Title'],
    rating: movie['imdbRating']
}));

console.log('\n\n\n\t---my top 5 movies are---\n\n',topFiveMovies,'\n\n');