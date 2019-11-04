const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a number: "));

const min = 0
const max = 100

if (grade>= 90 && grade <= 100 )  {
	console.log("\nYou recieved an A.");
}

else if (grade >= 80 && grade <= 89 )  {
	console.log("\nYou recieved a B.");
}

else if (grade >= 70 && grade <= 79 )  {
	console.log("\nYou recieved a C.");
}

else if (grade >= 60 && grade <= 69 )  {
	console.log("\nYou recieved a D.");
}

else if (grade >= 0 && grade <= 59 )  {
	console.log("\nYou recieved an F.");
}

else if (Number.isNaN(grade)){
  console.log("\nInvalid.");
}

else if (grade<min) {
	console.log("\nInvalid.");
}

else if (grade>max){
	console.log("\nInvalid.");
}
