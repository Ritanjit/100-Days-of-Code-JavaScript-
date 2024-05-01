
/* .dot and []bracket notation */

// Object declaration
let superCars = {
    'nissan GTR': '3000',
    mustang: '1300',
    supra: '2000',
    'ford GT': '900',
    koenigsegg: '1550',
    'bugatti chiron': '1600'
}

// Dot Notation
let a = superCars.supra;
let b = superCars.mustang;
let c = superCars.koenigsegg;

// Bracket Notation
let d = superCars['nissan GTR'];
let e = superCars['ford GT'];

// Storing object data in variable name (Bracket Notation)
let bugatti = 'bugatti chiron';
let f = superCars[bugatti];


// TIP: use bracket notation when your property name has spaces in between.



console.log('\n\t    --MOST NOTORIOUS CARS--');
console.log('\t1. SUPRAAAAA       :  ' + a + ' HP');
console.log('\t2. MUSTANG GT      :  ' + b + ' HP');
console.log('\t3. KOEGNIGSEGG     :  ' + c + ' HP');
console.log('\t4. NISSASN GTR     :  ' + d + ' HP');
console.log('\t5. FORD GT         :  ' + e + '  HP');
console.log('\t6. BUGATTI CHIRON  :  ' + f + ' HP');







