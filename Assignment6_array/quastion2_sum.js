

let arr = [17,8,9,5,20]

function addEnds(list){
     let sum;
     sum = arr[0] + arr[arr.length-1]
     return sum;
     
}
let value = addEnds(arr)
console.log(value)
