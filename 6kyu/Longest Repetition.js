/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l 
return the first in order of appearance.
For empty string return:
["", 0]
Happy coding! :)
*/

function longestRepetition(s) {
	let longestRep = 0;
	let longestChar = '';
	let repetition = 1;
	let currentChar = '';
	for (let i = 0; i < s.length; i++) {
		currentChar = s[i];
		// check if we have a repetition -> next char === the current char
		if (s[i + 1] === currentChar) {
			// increment repetition
			repetition++
		} else {
			// check if current repetition is longer than longest
			if (repetition > longestRep) {
				// the current char becomes the new longest
				longestRep = repetition;
				longestChar = currentChar;
			}
			// reset repetition to it's intial value
			repetition = 1;
		}
	}
	return [longestChar, longestRep]
}