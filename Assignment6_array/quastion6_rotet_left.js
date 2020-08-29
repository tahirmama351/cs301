'use strickt'


let arr = [17, 8, 9, 5, 20]

function rotate_left(list) {
     let temp_arr = []
     for (i = 0; i < arr.length; i++) {
          temp_arr[i] = arr[i+1] 
     }
     return temp_arr
}
let rotated_arr = rotate_left(arr);
console.log(rotated_arr);
