'use strickt'


let orginal_arr = [17, 8, 9, 5, 20]

function rotate_right(array) {

      // split arginal_arr in to two
     let new_orginal_arr1 = [8, 9, 5,20]
     let new_orginal_arr2 = [17]
     let rotated_arr= new_orginal_arr1.concat(new_orginal_arr2)
     
     console.log(rotated_arr)
}
rotate_right(orginal_arr);