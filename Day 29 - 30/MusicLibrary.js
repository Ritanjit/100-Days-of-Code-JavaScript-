
/* Music Library Update System */

// Albumns in your library
let recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    3499: {
        albumTitle: 'Nevermind',
        artist: 'Nirvana',
        tracks: ['Smells Like Teen Spirit','Come As You Are','']
    },
    7943: {
        albumTitle: 'A Head Full Of Dreams',
        artist: 'Coldplay',
        tracks: ['A Head Full Of Dreams','Birds','Everglow']
    }
};

// Function to update albumns
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (value !== '' && prop !== 'tracks') {
        records[id][prop] = value;
    } else if (value !== '' && prop === 'tracks') {
        if (records[id].hasOwnProperty('tracks') === false) {
            records[id][prop] = [];
        } else {
            records[id][prop].push(value);
        }
    }
    return records;
}

// Fucntion 2
function updateRecords(records, id, prop, value) {
    const albumn = records[id];
    if (value === '') {
        delete albumn[prop];
    } else if (prop !== 'tracks') {
        albumn[prop] = value;
    } else if (prop === 'tracks') {
        albumn['tracks'] = albumn['tracks'] || [];    // short-circuit evaluation (if any one is true then it is evaluated)
        albumn['tracks'].push(value);
    }
    return records;
}

console.log(recordCollection[7943]['tracks']);
let updatedRec = updateRecords(recordCollection,7943,'tracks','Hymn For The Weekend');
console.log(recordCollection[7943]['tracks']);
