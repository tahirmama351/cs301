let prompt = require('prompt-sync')();

let cost_of_house = prompt("What is the cost of house? ");
cost_of_house = parseFloat(cost_of_house);

if (cost_of_house < 50000) {
     console.log(0.05 * cost_of_house);

} else if (cost_of_house < 100000) {
     console.log(2000 + 0.1 * (cost_of_house - 50000));

} else if (cost_of_house < 200000) {
     console.log(7500 + 0.2 * (cost_of_house - 100000));

} else {
     console.log(27500 + 0.25 * (cost_of_house - 200000))
}
