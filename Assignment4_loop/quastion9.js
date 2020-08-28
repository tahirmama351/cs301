const prompt = require("prompt-sync")();
/*
Input:
     -integer
     -the pattern
proccessing:
     - write the program that print the given pattern
output:
     -print the pattern
*/

let n = prompt("Enter any positive number: ")
n = parseInt(n);

for (let i = 1; i <= n; i++) {

     let row = ""

     for (let j = 1; j <= 5; j++) {
          switch (j) {
               case 1:
                    row += i + "\t";
                    break;
               case 2:
                    row += 2 * i + "\t";
                    break;
               case 3:
                    row += 3 * i + "\t";
                    break;
               case 4:
                    row += Math.pow(i, 2) + "\t";
                    break;
               case 5:
                    row += Math.pow(i, 3) + "\t";
          }
     }
     console.log(row)
}