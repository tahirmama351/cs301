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

let answer =38;
	let guess = "please the integer between 1 and  100: "
	do{
		guess = parseInt(prompt(guess))
		if(guess < answer){			
			guess= guess + " is too low. please inter again:  " 			
		}else if(guess > answer){			
			guess =guess + " is too high. please inter again: "		
		}
	}while(guess!= answer)
	guess = guess +" is correct"
	console.log(guess)


