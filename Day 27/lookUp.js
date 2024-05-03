
/* Using JavaScript objects for LookUp */

// Library for songs and bands
const SONGS = {
    Queen : 'Bohemian Rhapsody',
    'The Beatles' : 'Yesterday',
    'Pink Floyd' : 'Comfortably Numb',
    Oasis : 'Wonderwall',
    Eagles : 'Hotel California',
    'Guns n Roses' : 'Sweet Child O Mine',
    Nirvana : 'Smells Like Teen Spirit',
    'AC/DC' : 'Back in Black',
}

// Function to look up songs by bands
function lookUp(band){
    return SONGS[band];
}

// Finding a song by a band
let favBand = 'Oasis';
let favSong = lookUp(favBand);
console.log('\n\nMy Favourite song is ' + favSong + ' by Oasis !');

// TIP: This is only useful when you know your data is limited to a certain range.












