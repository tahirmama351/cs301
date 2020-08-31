'use strickt'
prompt = require('prompt-sync')()
function prefix(first_word, second_word) {
     
     let temp_arr;
     for (let i =0; i< first_word.length; i++) {
         
          if (first_word[first_word.length-1-i] !== second_word[second_word.length-1-i]) {
               temp_arr = first_word.substring(first_word.length-i)
              break;
          }          
     }
     return temp_arr;
}

let result = prefix("walking", "swimming")
console.log(result)