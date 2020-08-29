'use strickt'


let orginal_arr = [17, 8, 9, 5, 20]

function rotate_right(array) {

     for (i = 0; i < array.length - 1; i++) {
          let temp_arr = array[i]
          array[i]=array[i+1]
          array[i+1]= temp_arr          
     }
     console.log(array)
}
rotate_right(orginal_arr);