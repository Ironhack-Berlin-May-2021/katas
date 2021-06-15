
/*
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, 
that takes an array of strings as an argument and returns a filtered array containing the 
same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
*/

function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	// create a new array
	let result = [];
	// iterate over birds
	for (let i = 0; i < birds.length; i++) {
		// for every bird check if the bird is not in the geese array
		if (geese.indexOf(birds[i]) === - 1) {
			// then we add it to the result array
			result.push(birds[i])
		}
	}
	// return the result array
	return result
};

// same logic but using filter to create the filtered array and 
// using includes() instead of indexOf()
function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	const filtered = birds.filter(function (bird) {
		return !geese.includes(bird)
	})
	return filtered
};

// same logic but shorter
function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return birds.filter(function (bird) {
		return !geese.includes(bird)
	})
};