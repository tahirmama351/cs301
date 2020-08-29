'use strict'

let arr = [2,5,4,7,3,6]
function countEven(list) {
     let tem_arr = []
     let j = 0;
     for (let i = 0; i < arr.length; i++) {

          if (arr[i] % 2 === 0) {
               tem_arr[j] = arr[i]
               j+=1
          }
     }
     return tem_arr
}
let count = countEven(arr)
console.log(count)