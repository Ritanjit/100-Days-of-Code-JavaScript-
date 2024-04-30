/* Update object in JavaScript */

// Object declaration...
let bestMovies = {
    'Catch me if you can' : ['comedy','drama','crime'],
    Interstellar : ['Science-fiction','Adventure'],
    'Fight club' : ['Romance','Thriller', 'Action'],
    Inception : ['Science-fiction','Action'],
    'Good Will Hunting' : ['Romance','Drama'],
    'Forest Gump' : ['Romance','Drama'],
    'Your Name' : ['Romance','Science-fiction'],
    'Shutter Island' : ['Thriller','Drama'],
    'The Wolf of the Wall Street' : ['Biography','Comedy','Crime'],
    Rocky : ['Science fiction','Action','Sport','Romance','Drama']
}

// Updating objects - Dot notation 
bestMovies.Rocky = ['Action','Sport','Drama'];          // Modifying data
bestMovies.WALL_E = ['Adventure','Drama'];              // Adding new data
delete bestMovies.Inception;                            // Deleting data

// Updating objects - Bracket notation
bestMovies["Fight club"] = ['Thriller','Action'];       // Modifying data
bestMovies['Grave of Fireflies'] = ['Drama','War'];     // Adding new data
delete bestMovies['Shutter Island'];                    // Deleting data    

console.log(bestMovies);

