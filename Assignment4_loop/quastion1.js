const prompt = require("prompt-sync")();
/*
Input:
     * any integer n
porccessing:
     * printing the the word " sunshine "  input times
output:
     sunshine n times.
*/
let n = prompt("Enter integer number: ");


n = parseInt(n);

for (let i = 1; i <= n; i++) {
     console.log("sunshine")
}