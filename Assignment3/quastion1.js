let prompt = require('prompt-sync')();
/*
input:
     any two different numbers
proccessing:
     the difference between two numbers.
     the absolute value of difference
output:
     absolute value of difference
*/
let num1 = prompt("Enter frist number: ");
num1 = parseFloat(num1);

let num2 = prompt("Enter second number ");
num2 = parseFloat(num2);

console.log(Math.abs(num2 - num1));