
/* Manipulating Nested Arrays in Objects */

const CARS = [
    {
        'Model' : 'Supra Turbo',
        'Company' : 'Toyota',
        'Year' : 1997,
        'HP' : 320,
        'Type' : ['Sports','Sedan','Drag']
    },
    {
        'Model' : 'MX-5 Miata',
        'Company' : 'Mazda',
        'Year' : 1989,
        'HP' : 116,
        'Type' : ['Sports','Sedan','Drag'],
    },
    {
        'Model' : 'Cherokee',
        'Company' : 'Jeep',
        'Year' : 1984,
        'HP' : 117,
        'Type' : ['SUV','Offroad']
    },
    {
        'Model' : 'Hilux 4x4',
        'Company' : 'Toyota',
        'Year' : 1968,
        'HP' : 210,
        'Type' : ['Pick-up Truck','Offroad']
    }
];

// Accessing sub properties...
let hModel = CARS[3].Model;
let hType = CARS[3].Type[0];
let hHP = CARS[3].HP;
let sModel = CARS[0].Model;
let sType = CARS[0].Type[0];
let sHP = CARS[0].HP;


// Display
console.log('\n\nSENA : " I want the Supra but my wife wants a Hilux. She says its more practical. "');
console.log('\n\n\t\t  ---CAR DEKHO COMPARISION---\n');
console.log('\t\t  HILUX\t\t\t  SUPRA\n');
console.log('Model : \t' + hModel + '\t\t' + sModel);
console.log('Type :\t' + '\t' + hType + '\t\t' + sType);
console.log('Power : \t' + hHP + ' HP\t\t\t' + sHP + ' HP');
console.log('\n\n')
console.log('VERSTAPPEN : " Always go with the SUPRA bruv! RATATATATAAA !! "\n\n');
