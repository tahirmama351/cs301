'use strickt'
let arr = [17, 8, 9, 5, 20]

function multiply(list, mutiplier) {
     let temp_arr = []
     for (i = 0; i < arr.length; i++) {
          temp_arr[i] = arr[i] * mutiplier
     }

     return temp_arr
}
let products = multiply(arr, 2)
console.log(products);