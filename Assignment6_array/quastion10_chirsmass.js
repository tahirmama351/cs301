const prompt = require("prompt-sync")();

let days_of_chirstmas = prompt("Enter the day of Chirstmas: ")
days_of_chirstmas = parseInt(days_of_chirstmas);

let gift_of_chistmas = ["a partridge in a pear tree", "two turtle doves", "three French hens", "four calling birds", "five golden rings", "six geese a laying", "seven swans a swimming", "eight maids a milking", "nine ladies dancing", "ten lords a leaping", "elven pipers piping", "twelve drummers drumming"]

let tem = []
tem[days_of_chirstmas] = gift_of_chistmas.slice(0, days_of_chirstmas)
tem[days_of_chirstmas] = tem[days_of_chirstmas].reverse()

tem[days_of_chirstmas] = `On the ${days_of_chirstmas} day of Chistmas, my true love gave to me: ` + tem[days_of_chirstmas].join(", ")

console.log(tem[days_of_chirstmas])
