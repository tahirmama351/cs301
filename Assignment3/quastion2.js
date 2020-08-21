let prompt = require('prompt-sync')();
/*
input:
     weather
     types of shoes
proccessing:
     maching the weather withe the type of shoes
output:
     forming the individual what type of shoes he/she have to wear
*/

let weather = prompt("What is the weather outside today? ");
let footWear;

if (weather == "hot") {
     footWear = "Wear sandal"
} else if (weather == "rain") {
     footWear = "Wear galoshes"
} else {
     footWear = "Wear Boots"
}

console.log(footWear)