/*
https://www.codewars.com/kata/57a6633153ba33189e000074
Count the number of occurrences of each character and return it as a list of 
tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
function orderedCount(text) {
	// turn input string to array 
	const array = text.split('');
	// filter out the duplicates 
	const noDuplicates = [...new Set(array)];
	// replace every character with an array
	// the array should contain two elements: 1. the character itself
	// 2. it's number of occurences in the input string
	return noDuplicates.map(char => [char, text.split(char).length - 1]);
}

// getting the number of occurences of 'o' in a string
const str = 'helloworld';
const occurences = str.split('o').length - 1;