let prompt = require('prompt-sync')();

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