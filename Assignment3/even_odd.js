let prompt = require('prompt-sync')();

let num = prompt("Enter any posative intger number: ");
num = parseInt(num);

if (num % 2 === 0) {
     console.log("You entered even number.")
} else {
     console.log("You entred odd number.")
}
