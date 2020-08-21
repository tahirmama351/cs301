let prompt = require('prompt-sync')();

let num1 = prompt("Enter frist number: ");
num1 = parseFloat(num1);

let num2 = prompt("Enter second number ");
num2 = parseFloat(num2);

console.log(Math.abs(num2 - num1));