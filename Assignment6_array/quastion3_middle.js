'use strickt'
arr = [17, 8, 9, 1, 5, 20]

function getMiddle(list) {
     let temp_arr = []
     let i;
     for (i = 0; i < arr.length; i++) {
          if (arr.length % 2 === 1){
               temp_arr = arr[(arr.length - 1) / 2]
          } else {
               let sum_midd_arr = arr[(arr.length - 1) / 2 + 1] + arr[(arr.length - 1) / 2 - 1] 
               temp_arr = sum_midd_arr/2
          }

    }
     return temp_arr
}
let value = getMiddle(arr)
console.log(value)