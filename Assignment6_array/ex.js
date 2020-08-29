const prompt = require("prompt-sync")();
let num = prompt("Enter the day of Chirstmas: ")
num = parseInt(num)
// let day_of_chirstmas = prompt("Enter the day of Chirstmas: ")
// day_of_chirstmas = parseInt(day_of_chirstmas);

let arr = ["tahir", "mama", "kedir", "alfiya"]
let tem = []
tem[num] = arr.slice(0, num)
tem[num] = tem[num].reverse()
     tem[num] = tem[num].join(",")

     console.log(tem[num])


// let tem = []
// let i = 0;
// do {

//      tem[i] = arr.slice(0, i)
//      tem[i] = tem[i].join(",")

//      console.log(tem[i])
//      i++
// } while (i <= num)

