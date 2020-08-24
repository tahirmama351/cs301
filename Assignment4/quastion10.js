/*
Inptu:
     -integer
proccessig:
     -Write the program that print 12 by 12 multiplication table
output:
     -12 by 12 multiplication table
*/
for (i = 1; i <= 12; i++) {
     let row = ""
     for (j = 1; j <= 12; j++) {
          row += i * j + "\t"
     } console.log(row)
}