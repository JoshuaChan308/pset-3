const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a number: "));


if (grade>= 90 && grade <= 100 )  {
	console.log("\nYou recieved an A.");
}

else if (grade >= 80 && grade <= 89 )  {
	console.log("\nYou recieved an B.");
}

else if (grade >= 70 && grade <= 79 )  {
	console.log("\nYou recieved an C.");
}

else if (grade >= 60 && grade <= 69 )  {
	console.log("\nYou recieved an D.");
}

else if (grade >= 0 && grade <= 59 )  {
	console.log("\nYou recieved an F.");
}

else if (Number.isNaN(grade)){
  console.log("\nInvalid.");
}
