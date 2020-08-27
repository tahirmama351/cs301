/*
Input:
	-number from the user
	-answer
proccessing:
	-compare input from user with answer
	-if not equal ask the user again let inpu another number
output:
	-guessed number + message for user
*/
const prompt = require("prompt-sync")();


let count = 1
let answer = 38;
let message = "please enter the integer between 1 and  100: ";
let guess;
do {
	guess = parseInt(prompt(message))
	if (guess < answer) {
		message = guess + " is too low. please inter again:  " ;		count += 1
	} else if (guess > answer) {
		message = guess + " is too high. please inter again: ";
		count += 1
	}
} while (guess != answer)
message = guess + " is correct"
count += 1
console.log(message)
console.log(count)


