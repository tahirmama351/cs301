const prompt = require("prompt-sync")();
/*
Input:
     - any phrase
     - any integer
proccessing:
     -printing the phrase we input times the integer we input;
output:
     -phrase 
*/
let phrase = prompt("Write any phrase: ")
let n = prompt("Enter any posative integer: ")
n = parseInt(n)

for (let i = 0; i < n; i++) {
     console.log(phrase);
}
