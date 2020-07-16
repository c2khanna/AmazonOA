/*
O(n) Time Complexity and O(n) Space Complexity
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let hash = new Map();
	array.forEach(elem => {
		hash.set(elem, targetSum - elem);
	});

	for (let keyProp of hash.keys()) {
		if (hash.has(hash.get(keyProp)) && hash.get(keyProp) != keyProp ) {
			// Do things here
			return [keyProp, hash.get(keyProp)];
		}
	}
	return [];
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));
