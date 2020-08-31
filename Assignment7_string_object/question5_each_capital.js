'use strickt'
prompt = require('prompt-sync')()

function titleCase(s) {
     let arrayOfString = s.split(" "); // change the sentece in to aray
     let new_arrayOfString = arrayOfString.map(word=>word[0].toUpperCase()+word.slice(1)); // map the array of string

     new_arrayOfString = new_arrayOfString.join(" "); // change to string

     return  new_arrayOfString

}

let sentence = prompt("write some sentence: ")
 
console.log(titleCase(sentence));



