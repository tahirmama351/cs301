let prompt = require('prompt-sync')();

/*
Input:
     *name of student
     *university credit accomplished
proccessing:
     *matching the name with credit accomplished
output:
     *the status of student
*/
let studentName = prompt("Enter you name: ");
let completedCredit = prompt("Enter credit number you accomplished: ");

if (completedCredit < 30) {
     console.log(studentName + " is " + "freshman.");

} else if (completedCredit < 60) {
     console.log(studentName + " is " + "sophomore.");

} else if (completedCredit < 90) {
     console.log(studentName + " is " + "junior.");

} else {
     console.log(studentName + " is " + "senior.")
}