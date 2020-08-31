'use strickt'
prompt = require('prompt-sync')()


function prefix(first_word, second_word) {
   
     let count = 0
     let temp_arr;
     for (let i = 0; i < first_word.length; i++) {
          count=i
          if (first_word[i] !== second_word[i]) {

               temp_arr = first_word.substring(0, count)
              break;
          }          
     }
     return temp_arr;
}

let result = prefix("dislike", "disable")
console.log(result)