/*
 * Implements the Collatz Conjecture
*/

function collaz (num) {
	if (num == 1)
		return 0;
	if (num % 2 == 0)
		return collaz(num/2) + 1;
	else
		return collaz((num*3)+1) + 1;	
}

// gets the 3rd argument on the command line
var num = process.argv[2];

if (num == undefined) {
	console.error("ERROR: Insert a number");
	process.exit(1);
}

if (num < 1) {
	console.error("ERROR: Use a number larger than 1");
	process.exit(1);
}

console.log("Number of steps: ", collaz(num));
