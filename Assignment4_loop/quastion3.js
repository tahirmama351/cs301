const prompt = require("prompt-sync")();
/*
Input:
     any integer.
proccessing:
     -print number between 1 and input.

output:
     number between 1 and input
*/
let n = prompt("Enter any posative integer: ")
n = parseInt(n)

for (let i = 2; i < n; i++) {
     console.log(i)
}