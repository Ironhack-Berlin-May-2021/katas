/*
https://www.codewars.com/kata/58daa7617332e59593000006
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
	let longestNumber = array[0];
	for (let num of array) {
		// get the length of the number after changing it to a string
		if (num.toString().length > longestNumber.toString().length) {
			longestNumber = num;
		}
	}
	return longestNumber;
}

// using reduce
const findLongest = a => a.reduce((a, b) => (b.toString().length > a.toString().length) ? b : a)