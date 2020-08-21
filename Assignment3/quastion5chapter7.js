let prompt = require('prompt-sync')();
/*
Input:
     age
     season
proccessing:
     determine the bed time deppend on age and season
output:
     bed time
*/
let age = prompt("Enter age: ");
let season = prompt("What is the season? ")

if (age <= 5) {
     if (season === "summer" || season === "fall") {
          console.log("go bed at 8:30 pm")
     } else if (season === "winter" || season === "spring") {
          console.log("go bed at 8:00 pm")
     }
} else if (age <= 12) {
     if (season === "summer") {
          console.log("go bed at 9:30 pm")
     } else if (season === "winter" || season === "spring" || season === "fall") {
          console.log("go bed at 8:30 pm")
     }
} else {
     if (season === summer) {
          console.log("go bed at 10:30 pm")
     } else if (season === "winter" || season === "spring" || season === "fall") {
          console.log("go bed at 9:30 pm")
     }
}