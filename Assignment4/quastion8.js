const prompt = require("prompt-sync")();

//let message; // ="I am thinking of a number between 1 and 100 tray to guess it! please inter an integer between 1 and 100: "
//let guess;

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


