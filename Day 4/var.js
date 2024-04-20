/* Exploring differences between var and let keywords */

var cpu= "Ryzen 9"; //declared using var keyword

let gpu="RTX 4090"; //declared using let keyword

console.log("\n\n\t\t used to have a "+ cpu + "and" + gpu + " PC !");

//Reducing the var keyword
var cpu="i3";

//without Redeclaration of "let" keyword...... 
console.log("\n\t\t Now, I have a" + cpu + " laptop :()");

//Tip: USe the let keyword for variables you want to declare permanently.