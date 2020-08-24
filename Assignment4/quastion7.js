/*
Input:
     - i is from 0 to 24
proccessing:
     calculate the Fibonacci series.
output:
     - the first 25 Fibonacci series.
*/
let num1 = 0;
let num2 = 1;
let result;
for (i = 0; i < 25; i++) {
     if (i < 2) {
          console.log(i)
     } else {
          result = num1 + num2;
          num1 = num2;
          num2 = result;
          console.log(result);
     }
}
