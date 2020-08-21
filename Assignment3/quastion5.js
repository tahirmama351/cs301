let prompt = require('prompt-sync')();
/*
Input:
     *the status of costomer
     *number of books overdue date in the last year
processing:
     *calculate the borrowing time depend on the status and overdue data
output:
     *borrowing time
*/

let patron_status = prompt("Enter your patron status: ");

let number_of_books_overdue = prompt("How many books the person has kept past the due date in the last year? ");
number_of_books_overdue = parseFloat(number_of_books_overdue);

if (patron_status === "student") {
     if (number_of_books_overdue === 0) {
          console.log("you can borrow for 6 weeks.");
     } else if (number_of_books_overdue < 3) {
          console.log("you can borrow for 4 weeks.");
     } else if (number_of_books_overdue >= 3) {
          console.log("you can borrow for 2 weeks.");
     }
} else if (patron_status === "facalty") {
     if (number_of_books_overdue === 0) {
          console.log("you can borrow for 16 weeks.");
     } else if (number_of_books_overdue < 3) {
          console.log("you can borrow for 12 weeks.");
     } else if (number_of_books_overdue >= 3) {
          console.log("you can borrow for 8 weeks.");
     }
} else {
     if (number_of_books_overdue === 0) {
          console.log("you can borrow for 4 weeks.");
     } else if (number_of_books_overdue < 3) {
          console.log("you can borrow for 3 weeks.");
     } else if (number_of_books_overdue >= 3) {
          console.log("you can borrow for 2 weeks.");
     }
}