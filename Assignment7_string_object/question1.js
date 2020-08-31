'use strickt'
prompt = require('prompt-sync')()

function exrtactGivenName(fullName){
     let fullName_arr = fullName.split(' ')
     let givenName = fullName_arr[1];
    
return givenName;
}
let input_fullName =prompt("Enter your full name please: ")

 let given_name = exrtactGivenName(input_fullName)
console.log(given_name)

