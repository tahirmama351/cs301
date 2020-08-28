'use strickt'
let prompt = require('prompt-sync')();

function chackPrime(num) {
     let isPrime = true;

     for (let i = 2; i < num; i++) {

          if (num % i == 0) {
               isPrime = false;
               break;
          }
     }
     console.log(isPrime)
}

function to_chack_prime(number_from_user) {
     chackPrime(number_from_user)
}

let inputByUser = prompt("Please enter a number let I test if it is pime: ");
inputByUser = parseInt(inputByUser);

to_chack_prime(inputByUser);

