const prompt = require("prompt-sync")();
/*
Input:
    -any integer
proccessing:
    - sellect odd number and add together
output:
    -the sum of odd number between 1 and input.
*/

let n = prompt("Enter any posative integer: ")
n = parseInt(n)

let sum = 0;
for (let i = 1; i <= n; i++) {
     if ((i % 2) !== 0) {
         sum += i; 
     }      
}
console.log(sum);