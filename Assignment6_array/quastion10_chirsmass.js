const prompt = require("prompt-sync")();

let days_of_chirstmas = prompt("Enter the day of Chirstmas: ")
days_of_chirstmas = parseInt(days_of_chirstmas);

let gift_of_chistmas = ["a partridge in a pear tree", "two turtle doves", "three French hens", "four calling birds", "five golden rings", "six geese a laying", "seven swans a swimming", "eight maids a milking", "nine ladies dancing", "ten lords a leaping", "elven pipers piping", "twelve drummers drumming"]


function on_the_day_of_chirsmas(chirstmas_day) {
     
     let temp_array = []
     temp_array[days_of_chirstmas] = gift_of_chistmas.slice(0, days_of_chirstmas)
     temp_array[days_of_chirstmas] = temp_array[days_of_chirstmas].reverse()

     temp_array[days_of_chirstmas] = `On the ${days_of_chirstmas} day of Chistmas, my true love gave to me: ` + temp_array[days_of_chirstmas].join(", ")

     console.log(temp_array[days_of_chirstmas])
}
on_the_day_of_chirsmas(days_of_chirstmas)

