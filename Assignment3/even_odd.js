let prompt = require('prompt-sync')();

/* 
Input:- 
     any posative integer;
proccessing:-
c    alculating even number. number is even when it is parfect divissible of 2. 
     The module number of two must be zero. other wise it is odd
num%2===0
output:
     even number or odd number

*/

let num = prompt("Enter any posative integer number: ");
num = parseInt(num);

if (num % 2 === 0) {
     console.log("You entered even number.")
} else {
     console.log("You entred odd number.")
}
