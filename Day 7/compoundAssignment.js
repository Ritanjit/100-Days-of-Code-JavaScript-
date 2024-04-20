/* Compound Assignment with Augmented Arithmatics */

// Features of a Phone I want....
var cameraQuality = 50;
let ram = 12;
const BATTERY = 5050;

// Price Formula
let basePrice = ram*cameraQuality;

console.log("\n\n\t\t ---Device Specifications---");
console.log("\t\tProduct Name: Google Pixel 8 Pro");
console.log("\t\tRAM: "+ram+ " GB ");

//Addition Assignment
ram+=500;
console.log("\t\tStorage: "+ram + " GB ");
console.log("\t\tPrimary Camera: "+ cameraQuality+ "MP");

// Substraction Assignment
cameraQuality -= 39.5 ;
console.log("\t\tFront Camera: " + cameraQuality+ "MP");
console.log("\t\tBattery: "+ BATTERY);

//Multiplication Assignment
basePrice *= 200;
console.log("\t\tMRP : $" + basePrice);

//Division Assignment
basePrice /=1.25;
console.log("\t\tNEW OFFER PRICE: $" + basePrice);

//TIP: you cannot use Compound Assignment with 'const' variables !!