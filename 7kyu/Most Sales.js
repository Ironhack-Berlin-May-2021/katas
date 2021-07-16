/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824
You work in the best consumer electronics corporation, and your boss wants to find out which three products
generate the most revenue. Given 3 lists of the same length like these:
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

function top3(products, amounts, prices) {
	const revObjects = products.map((product, index) => {
		return {
			name: product,
			revenue: amounts[index] * prices[index],
			index: index
		}
	})

	const sorted = revObjects.sort((a, b) => {
		// if b.revenue === a.revenue -> order by
		// if (b.revenue === a.revenue) {
		//   return a.index - b.index
		// } 
		// return b.revenue - a.revenue
		return b.revenue - a.revenue || a.index - b.index
	})
	// return sorted
	return sorted.slice(0, 3).map(product => product.name)
}

function top3(products, amounts, prices) {
	const rev = prices.map((price, index) => {
		return price * amounts[index]
	})
	//return rev
	const top3 = [];
	for (let i = 0; i < 3; i++) {
		top3.push(products[rev.indexOf(Math.max(...rev))]);
		rev[rev.indexOf(Math.max(...rev))] = - 1;
		console.log(rev)
	}
	return top3
}