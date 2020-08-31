'use strickt'
prompt = require('prompt-sync')()

function switchCase(s) {
     let temp_switch = []
     for (let i = 0; i < s.length; i++) {

          if (s[i] != s[i].toUpperCase()) {

               temp_switch[i] = s[i].toUpperCase()

          }else if(s[i]!==s[i].toLowerCase()){
               
               temp_switch[i]=s[i].toLowerCase()

          }else {
               temp_switch[i]=s[i]
          }         
     }
     temp_switch= temp_switch.join('')
     return temp_switch;
}
let switched_case = switchCase("Catch 22")
console.log(switched_case)