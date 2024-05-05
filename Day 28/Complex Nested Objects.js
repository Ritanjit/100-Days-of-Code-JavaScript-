
/* Manipulating Complex Nested Objects */

let bayernXI = {
    'defense': {
        'goalkeeper': {
            'Oliver Kahn': {
                'matches': 400
            },
            'Manuel Neuer': {
                'matches': 342
            }
        },
        'defenders': {
            'David Alaba': {
                'matches': 431
            },
            'Philip Lahm': {
                'matches': 516
            },
            'Franz Beckenbauer': {
                'matches': 396
            }
        }
    },
    'mid-field': {
        'Lothar Matthaus': {
            'mathces': 400,
            'goals': 100
        },
        'Arjen Robben': {
            'matches': 309,
            'goals': 144
        },
        'Frank Ribbery': {
            'matches': 432,
            'goals': 123
        }
    },
    'forward': {
        'Thomas Muller': {
            'matches': 704,
            'goals': 242
        },
        'Gerd Muller': {
            'matches': 584,
            'goals': 531
        },
        'Robert Lewandowski': {
            'mathces': 375,
            'goals': 344
        }
    }
}

// Accessing sub-objects...
let gk = bayernXI.defense.goalkeeper['Oliver Kahn'].matches;
let def = bayernXI.defense.defenders['Philip Lahm'].matches;
let mid = bayernXI['mid-field']['Frank Ribbery'].goals;
let fd = bayernXI.forward['Robert Lewandowski'].goals;
let duo = bayernXI["mid-field"]["Frank Ribbery"].goals + bayernXI["mid-field"]["Arjen Robben"].goals;
let mvp = bayernXI.forward["Gerd Muller"].goals;



// TIP: use []bracket notation for multi-string key values.












// Display
console.log('\n\n\n\t\t   ---BAYERN MUNCHEN HALL OF FAME---\n');
console.log('\n\t\tGOAL-KEEPER : Oliver Kahn   | Matches : ' + gk);
console.log('\n\t\tDEFENDER    : Philip Lahm   | Matches : ' + def);
console.log('\n\t\tMID-FIELD   : Frank Ribbery | Goals   : ' + mid);
console.log('\n\t\tFORWARD     : Robert Lewy   | Goals   : ' + fd);
console.log('\n\n\t\t\t   ---BEST DUO---\n');
console.log('\t\t Robbery : Frank Ribbery & Arjen Robben');
console.log('\n\t\t Total Goals : ' + duo)
console.log("\n\n\t\t ---BEST PLAYER IN CLUB'S HISTORY---");
console.log('\n\t\t Gerd Muller | Total Goals : ' + mvp);
console.log('\n\n\n')