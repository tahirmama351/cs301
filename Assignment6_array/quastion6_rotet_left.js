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


// function arrayReverse(list){
//      let tem_arr = []
//      for(let i=0; i<list.length; i++){
//           tem_arr[i]=arr[list.length -1-i];
//      }
// return tem_arr
// }
// let arr = [1,5,23,7,-2];
// let result = arrayReverse(arr);
// console.log(result)